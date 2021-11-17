"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeUpdate(params, data) {
      const subscription = await strapi
        .query("subscriptions")
        .findOne({ id: data.subscription });
      let currentDate = new Date(subscription.expires_at);
      let nextMonth = new Date(
        currentDate.setMonth(currentDate.getMonth() + 1)
      );
      let nextYear = new Date(
        currentDate.setFullYear(currentDate.getFullYear() + 1)
      );

      if (
        data.status === "paid" &&
        new Date(subscription.expires_at) < Date.now()
      ) {
        strapi.query("subscriptions").update(
          { id: data.subscription },
          {
            expires_at:
              subscription.paymentRecurrence === "monthly"
                ? nextMonth
                : nextYear,
            active: true,
          }
        );
      }
    },
  },
};
