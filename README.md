# Example AppRunner application

The intention of this project is to host app runner with different source options, covering private ECR, public ECR & GitHub repositories.

The AWS account launching this application is preconfigured with an ECR repository called `manual-test`. Make sure to change the repository name accordingly.
To publish a new image to that repository, follow the instructions
Docker image pulled, retagged and pushed to private repository [here](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html) or alternatively given in the console of the repository.


## Links
* [CDK package for apprunner](https://constructs.dev/packages/@aws-cdk/aws-apprunner-alpha/v/2.93.0-alpha.0?lang=typescript#ecr-public)
* [Guide to push images to ECR repository](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)