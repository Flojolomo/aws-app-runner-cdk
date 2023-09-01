import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';

export class AwsAppRunnerCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appRunnerService = new apprunner.Service(this, "app-runner-service", {
      source: apprunner.Source.fromGitHub({
        repositoryUrl: "https://github.com/vercel/next.js/tree/canary/examples/hello-world",
        branch: "canary",
        configurationSource: apprunner.ConfigurationSourceType.REPOSITORY,
        connection: apprunner.GitHubConnection.fromConnectionArn("arn:aws:apprunner:eu-central-1:718517280342:connection/private-github/bb8596b912844bad8ebd7cb0f99143ac")
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
