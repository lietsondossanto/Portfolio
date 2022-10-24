import { styled } from '@stitches/react'

export const Wrapper = styled('header', {
  position: 'absolute',
  bottom: '0%',
  left: '0%',
  width: '100%',
  height: '2.5rem',
  backgroundColor: '$secundary',
  backdropFilter: 'blur(45px)',
  overflow: 'hidden',

  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  }
})

export const ListRight = styled('ul', {
  display: 'flex',
  height: '100%',

  '.list__item': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.5rem',
    height: '2.5rem',
    listStyle: 'none',
    textDecoration: 'none',
    textTransform: 'none',

    a: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },

    '.item__icon': {
      fontSize: '1rem'
    }
  },

  '.list__item--start': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$white',

    '&:hover': {
      color: '$primary',
      backgroundColor: '$bg-icon'
    }
  },

  '.list__item--input': {
    display: 'flex',
    alingItems: 'center',
    width: '26rem',
    border: 'thin solid $bg-icon',
    color: '$grey',
    backgroundColor: '$dark',

    label: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '.item__icon': {
        margin: '1rem',
        fontSize: '17px'
      }
    },

    '.item__input': {
      width: '100%',
      fontSize: '1rem',
      border: 'none',
      color: '$grey',
      backgroundColor: 'transparent'
    },

    '&:hover, &:focus-within': {
      border: 'thin solid $white'
    }
  },

  '.list__item--app': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '.item__icon': {
      width: '1.6rem',
      height: '1.6rem'
    },

    '&:hover': {
      backgroundColor: '$bg-icon'
    }
  }
})

export const ListLeft = styled('ul', {
  display: 'flex',
  height: '100%',

  '.list__item': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: '2.5rem',
    paddingRight: '0.3rem',
    paddingLeft: '0.3rem',
    listStyle: 'none',
    textDecoration: 'none',
    textTransform: 'none',

    '.item__icon': {
      color: '$white',
      fontSize: '1.4rem'
    },

    '&:hover': {
      backgroundColor: '$bg-icon'
    }
  },

  '.list__item--date': {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.8rem',
    color: '$text',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem'
  },

  '.list__item--message': {
    paddingRight: '1.2rem',
    paddingLeft: '0.5rem'
  },

  '.list__item--hide_all': {
    borderLeft: 'thin solid $white'
  }
})
