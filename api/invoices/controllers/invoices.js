"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: (ctx) => {
    return strapi
      .query("invoices")
      .find(ctx.query, [
        "subscription.owner",
        "subscription.partner",
        "coupon",
      ]);
  },
};
