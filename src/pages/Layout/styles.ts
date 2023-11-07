import { styled } from '@byte3-esf/react'

export const LayoutContainer = styled('main', {
  "width": "100%",
  "height": "100%",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",

  "marginTop": "2.75rem"
})

export const LayoutContent = styled('div', {
  "maxWidth": "49.75rem", // 796px
  "width": "100%",
  "height": "100%",

  "@media screen and (max-width: 400px)": {
    "maxWidth": "21rem", // 336px
  }
})