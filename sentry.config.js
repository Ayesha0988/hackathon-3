const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  sentry: {
    dsn: process.env.SENTRY_DSN, 
    tracesSampleRate: 1.0, 
  },
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
