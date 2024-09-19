module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  // CORS configuration
  settings: {
    cors: {
      enabled: true,
      origin: "*", // Replace with your frontend origin for production
    },
  },
  // WebSocket configuration
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: {
          origin: "*", // Replace with your frontend origin for production
          methods: ["GET", "POST"],
        },
      },
    },
  },
});
