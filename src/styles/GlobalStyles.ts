import { globalCss } from '@stitches/react'

import image from './../assets/images/wallpaper.png'

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box'
  },

  'html, body, #root': {
    minHeight: '100%',
    minWidth: '100%'
  },

  body: {
    fontSize: '100%',
    fontFamily: 'Helvetica, Arial, sans-serif',
    textRendering: 'optimizeLegibility',
    webkiFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    color: '$black',
    backgroundColor: '$white',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
})
