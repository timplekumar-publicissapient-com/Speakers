/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'My New Custom View Project',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'speakers',
    },
    production: {
      customViewId: 'cme8f8koz002h0001txojk20k',
      url: 'https://commercetoolspoc.vercel.app',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
