import { globalCss } from '@byte3-esf/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray400',
    color: '$gray100',
    fontFamily: 'Public sans, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
  },
})