# Hydrogen - Hello World JavaScript Example

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

[Run this template in JavaScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

[Run this template in TypeScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

## Screenshots

1. Products page
   <img width="1792" alt="Products page" src="https://user-images.githubusercontent.com/24325533/193562705-89d50fbc-b9ee-4986-94ed-ca616b537873.png">

2. Product Details page
   <img width="1792" alt="Product Details page" src="https://user-images.githubusercontent.com/24325533/193562755-0a6f2dc0-0451-4086-8da4-f5266624fc3b.png">

3. Cart drawer
   <img width="1792" alt="Cart drawer" src="https://user-images.githubusercontent.com/24325533/193562783-493fc6cb-a87d-4824-be5e-cbd86b452e68.png">

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher
- Yarn

```bash
npm init @shopify/hydrogen@latest --template hello-world-ts
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
yarn build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```

