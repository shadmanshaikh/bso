"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async create(ctx) {
    // Call the default create action
    const response = await super.create(ctx);

    // Emit a 'create' event with the new blog data
    if (response.data) {
      strapi.plugin("io").service("io").raw("blog:create", response.data);
    }

    return response;
  },

  async update(ctx) {
    // Call the default update action
    const response = await super.update(ctx);

    // Emit an 'update' event with the updated blog data
    if (response.data) {
      strapi.plugin("io").service("io").raw("blog:update", response.data);
    }

    return response;
  },

  async delete(ctx) {
    // Call the default delete action
    const response = await super.delete(ctx);

    // Emit a 'delete' event with the deleted blog data
    if (response.data) {
      strapi.plugin("io").service("io").raw("blog:delete", response.data);
    }

    return response;
  },
}));
