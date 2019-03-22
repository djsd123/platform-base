import * as EC2 from "aws-sdk/clients/ec2";

const ec2 = new EC2();

export async function getAvailabilityZoneNames() {
    ec2.describeAvailabilityZones((err, result) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log(err, err.stack);
        } else {
             for (const az of result.AvailabilityZones) {
                 // tslint:disable-next-line:no-console
                 console.log(az.ZoneName);
                 // tslint:disable-next-line:no-console
                 console.log(result.AvailabilityZones.length);
             }
        }
    });
}

/*
getAvailabilityZoneNames((AvailabilityZones) => {
    // tslint:disable-next-line:no-console
    console.log(AvailabilityZones);
});

/*
request.on("success", (response) => {
    // tslint:disable-next-line:no-console
    console.log(response.data);

}).send();

// tslint:disable-next-line:no-console
console.log("cheech") */
