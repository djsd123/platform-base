import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("platform-base");
const name = config.require("platform-base:rootDomain");

const commonTags = new Map([
    ["Name", name],
    ["kubernetesCluster.io/cluster/name", "shared"],
]);

const vpc = new aws.ec2.Vpc(name, {
    cidrBlock: config.require("vpc-cidr"),
    enableDnsHostnames: true,
    enableDnsSupport: true,
    tags: commonTags.set("KubernetesCluster", name),
 }, {
    protect: true,
});

const igw = new aws.ec2.InternetGateway(name, {
    tags: commonTags,
    vpcId: vpc.id,
});

const eip = new aws.ec2.Eip(name, {
    tags: commonTags,
    vpc: true,
}, {
    dependsOn: igw,
});

const gw = new aws.ec2.NatGateway(name, {
    allocationId: eip.id,
    tags: commonTags,
});
awsx.
