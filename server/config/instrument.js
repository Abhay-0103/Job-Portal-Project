// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://e967fd797bfeb1a8ef6c02c9ac573f3f@o4509502282334208.ingest.us.sentry.io/4509502297800704",
  integrations: [
    Sentry.mongooseIntegration()
],


  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});