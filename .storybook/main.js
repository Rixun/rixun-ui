module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  features: {
    storyStoreV7: false, // 👈 Opt out of on-demand story loading
  },
  docs: {
    autodocs: true
  }
}