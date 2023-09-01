import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';

export class AwsAppRunnerCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appRunnerService = new apprunner.Service(this, "app-runner-service", {
      source: apprunner.Source.fromEcrPublic({
        imageIdentifier: "public.ecr.aws/aws-containers/hello-app-runner:latest",
        imageConfiguration: {
            port: 8000
        },
      })
    })

    new cdk.CfnOutput(this, "app-runner-service-url", {
      value: appRunnerService.serviceUrl
    })

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsAppRunnerCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
