#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DevopsProjectCdkStack } from '../lib/devops-project-cdk-stack';

const app = new cdk.App();

// Get environment from context or use default
const deployEnv = process.env.DEPLOY_ENV || 'dev';

// AWS account and region
const account = '716716272018';
const region = 'ca-central-1';

// Create the infrastructure stack
new DevopsProjectCdkStack(app, `InfrastructureStack-${deployEnv}`, {
  env: {
    account: account,
    region: region,
  },
  description: `AWS Infrastructure Stack for ${deployEnv} environment`,
  tags: {
    Environment: deployEnv,
    Project: 'DevOps-CDK-Pipeline',
    ManagedBy: 'AWS-CDK'
  }
});

app.synth();
