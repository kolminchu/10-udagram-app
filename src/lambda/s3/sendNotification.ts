import { S3Handler, S3Event } from 'aws-lambda'
import 'source-map-support/register'

export const handler : S3Handler = async (event: S3Event) => {
    for( const record of event.Records){
        console.log("event records is :" , event.Records);
        console.log("s3 is :" , event.Records[0].s3);
        console.log("record is :" , record);
        const key = record.s3.object.key;
        console.log("processing S3 item with key: ", key);
    }
}