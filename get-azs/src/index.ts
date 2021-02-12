
import {EC2Client, DescribeAvailabilityZonesCommand} from "@aws-sdk/client-ec2"

const REGION = 'eu-west-1'

const ec2 = new EC2Client({region: REGION})

const azs = await ec2.send(new DescribeAvailabilityZonesCommand({}))

console.log(azs)
