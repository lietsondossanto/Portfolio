import { styled } from '@stitches/react'

export const Wrapper = styled('main', {
  width: '100%',
  height: '95vh',
  padding: '1rem',

  '.desktopIcon': {
    a: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textDecoration: 'none'
    },

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '5rem',
    height: '5rem',
    marginTop: '1rem',

    '&:first-child': {
      marginTop: '0'
    },

    '.desktopIcon__icon': {
      width: '3rem',
      height: '3rem'
    },

    '.desktopIcon__name': {
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
