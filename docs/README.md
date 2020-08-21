# Notes

## Setup

```sh
yarn add theme-ui @emotion/core @mdx-js/react
```

## Theme

> Each key in the theme object corresponds to a certain set of CSS properties. For example; the fonts key is used with font-family, the space key can be used to define margins, paddings, and grid-gap. We’ll see this in action soon. For more details check out the Theme UI theming documentation.

```ts
export default {
  fonts: {
    body: 'Georgia, Cambria, "Times New Roman", Times, serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#392a25",
    muted: "#aaaaaa",
    background: "#f8f8f8",
    foreground: "#ffffff",
    primary: "#92b955",
    secondary: "#9f8a6d",
  },
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ["40em", "64em", "80em"],
};
```
