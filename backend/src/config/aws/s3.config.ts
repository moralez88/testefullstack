import { registerAs } from '@nestjs/config';

export default registerAs('aws', () => ({
  s3: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_S3_BUCKET,
    endpoint: process.env.AWS_S3_ENDPOINT,
    forcePathStyle: true, // Necessário para LocalStack
  },
}));
