module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: {
          origin: "*", // Allow from all origins; restrict in production
          methods: ["GET", "POST"],
        },
      },
      contentTypes: [
        "plugin::['api::blog.blog']", // Track User collection changes
      ],
    },
  },
});
