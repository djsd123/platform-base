import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("pulumi-dev", {
    bucket: "pulumi-dev",
});

// Export the name of the bucket
export const bucketName = bucket.id;

