module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 2,
    },
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {
      grid: true,
    },
    cssnano: {
      preset: "default",
    },
  },
};
