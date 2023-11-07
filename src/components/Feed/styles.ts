import { styled } from '@byte3-esf/react';

export const FeedContainer = styled('section', {
  "display": "flex",
  "flexDirection": "column",
  "gap": "26px",
})

export const FeedHeader = styled('header', {
  "display": "flex",
  "flexDirection": "column",
  "gap": "22px",

  "& > div": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",

    "a": {
      "textDecoration": "none",
      "color": "$dark_blue400",
    }
  },

  "button": {
    "display": "flex",
    "gap": "16px",

    "p": {
      "color": "$black"
    }
  }
})