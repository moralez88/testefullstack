declare const _default: (() => {
    s3: {
        accessKeyId: string;
        secretAccessKey: string;
        region: string;
        bucket: string;
        endpoint: string;
        forcePathStyle: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    s3: {
        accessKeyId: string;
        secretAccessKey: string;
        region: string;
        bucket: string;
        endpoint: string;
        forcePathStyle: boolean;
    };
}>;
export default _default;
