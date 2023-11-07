import { styled, Box } from '@byte3-esf/react';

export const PostContainer = styled(Box, {
  "background": "$gray300",
  "borderRadius": "$md"
})

export const PostHeader = styled('div', {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",

  ".userInfo": {
    "display": "flex",
    "alignItems": "center",
    "gap": "12px",

    "div > p:first-child": {
      "fontWeight": "bold"
    }
  }
})

export const PostBody = styled('div', {
  "display": "flex",
  "flexDirection": "column",
  "gap": "26px",
  "padding": "1.75rem 2.563rem 1.375rem"
})

export const PostVideo = styled(Box, {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "height": "20rem"
})

export const PostFooter = styled('div', {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "padding": "0 2.563rem"
})

export const PostActions = styled('div', {
  "display": "flex",
  "alignItems": "center",
  "gap": "38px"
})

export const PostActionsItem = styled('div', {
  "display": "flex",
  "alignItems": "center",
  "gap": "11px",
})