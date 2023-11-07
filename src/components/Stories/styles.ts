import { styled } from '@byte3-esf/react';

export const StoriesContainer = styled('section', {
  "display": "flex",
  "flexDirection": "column",
  "gap": "22px",

  "& > div:first-child": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",

    "a": {
      "textDecoration": "none",
      "color": "$dark_blue400",
    }
  }
})

export const StoriesList = styled('div', {
  "display": "flex",
  "padding": "0 1.375rem",
  "justifyContent": "space-between",
})