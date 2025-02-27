declare const _default: (() => {
    s3: {
        accessKeyId: string | undefined;
        secretAccessKey: string | undefined;
        region: string | undefined;
        bucket: string | undefined;
        endpoint: string | undefined;
        forcePathStyle: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    s3: {
        accessKeyId: string | undefined;
        secretAccessKey: string | undefined;
        region: string | undefined;
        bucket: string | undefined;
        endpoint: string | undefined;
        forcePathStyle: boolean;
    };
}>;
export default _default;
