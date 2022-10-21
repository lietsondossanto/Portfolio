import { styled } from '@stitches/react'

export const Wrapper = styled('main', {
  width: '100%',
  height: '95vh',
  padding: '1rem',

  '.folder': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '5rem',
    height: '5rem',

    '.folder__icon': {
      width: '3rem',
      height: '3rem'
    },

    '.folder__name': {
      color: '$text',
      marginTop: '0.2rem',
      fontSize: '1rem'
    },

    '&:hover': {
      border: '1px solid $grey',
      backgroundColor: '$bg-icon'
    }
  }
})
