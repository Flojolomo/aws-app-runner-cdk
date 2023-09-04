#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsAppRunnerCdkStack } from '../lib/aws-app-runner-cdk-stack';
import { config } from '../lib/config';


const app = new cdk.App();
new AwsAppRunnerCdkStack(app, 'AwsAppRunnerCdkStack', {
  repositoryName: config.repositoryName
});