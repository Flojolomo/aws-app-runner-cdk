import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';
import * as ecr from 'aws-cdk-lib/aws-ecr';

type AwsAppRunnerCdkStackProps = cdk.StackProps & {
  /** Name of the ECR repository providing the image to run. */
  repositoryName: string
}

export class AwsAppRunnerCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AwsAppRunnerCdkStackProps) {
    super(scope, id, props);

    const appRunnerService = new apprunner.Service(this, "app-runner-service", {
      serviceName: "AppRunnerExampleService",
      source: apprunner.Source.fromEcr({
        repository: ecr.Repository.fromRepositoryName(this, "image-repository", props.repositoryName),
        tagOrDigest: "latest",
        imageConfiguration: {
          port: 80
        }
      })
    })

    new cdk.CfnOutput(this, "app-runner-service-url", {
      value: appRunnerService.serviceUrl
    })
  }
}
