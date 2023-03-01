---
sidebar_position: 1
---

# Installation

Getting started with **Badges** only takes a few simple steps.

Firstly, you'll need to install the `@geometricpanda/storybook-addon-badges` from npm.

## NPM Install

```shell title="NPM"
npm install @geometricpanda/storybook-addon-badges --save-dev
```
```shell title="Yarn"
yarn add @geometricpanda/storybook-addon-badges -D
```

## Enabling the addon

Once you've got the addon installed, you'll need to configure your Storybook to load it's preset. 

```javascript title=".storybook/main.js"
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@geometricpanda/storybook-addon-badges" // <-- Add this
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}

```
