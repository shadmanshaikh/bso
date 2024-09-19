module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      const publicUserData = {
        id: result.id,
        username: result.username,
        email: result.email, // Optionally include this
      };
      strapi.io.emit("new-user", publicUserData);
    },
    async afterUpdate(result, params, data) {
      const publicUserData = {
        id: result.id,
        username: result.username,
        email: result.email, // Optionally include this
      };
      strapi.io.emit("update-user", publicUserData);
    },
    async afterDelete(result, params) {
      strapi.io.emit("delete-user", { id: result.id });
    },
  },
};
