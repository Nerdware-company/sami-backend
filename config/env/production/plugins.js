module.exports = ({ env }) => ({
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: env("GCS_BUCKET_NAME"),
      publicFiles: env.bool("GCS_PUBLIC_FILES"),
      uniform: env.bool("GCS_UNIFORM"),
      basePath: env("GCS_BASE_PATH"),
    },
  },
});
