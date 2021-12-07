module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey:
        "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",
    },
    settings: {
      defaultFrom: "bmars6821@gmail.com",
      defaultReplyTo: "bmars6821@gmail.com",
      testAddress: "bmars6821@gmail.com",
    },
  },
});
