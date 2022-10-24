import { styled } from '@stitches/react'

export const Wrapper = styled('section', {
  position: 'absolute',
  backgroundColor: '$bg-icon',
  width: '70rem',
  height: '40rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',

    '.top': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      heigh: 'auto',
      backgroundColor: '$black',

      '.top__leftSide': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '.icon, p': {
          color: '$text',
          fontSize: '0.8rem'
        },

        '.separator': {
          color: '$bg-icon'
        },

        '.icons--middle': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      },

      '.top__rightSide': {
        '.rightSide__icons': {
          width: '50%',
          height: '2rem',

          '.icons': {
            height: '100%',
            fontSize: '2rem',
            color: '$text',
            padding: '0.50rem'
          },

          '.icons--minimize, .icons--maximize': {
            '&:hover': {
              color: '$text',
              backgroundColor: '$primary'
            }
          },

          '.icons--Close': {
            '&:hover': {
              backgroundColor: '$danger'
            }
          }
        }
      }
    },

    '.tabs': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      heigh: 'auto',
      backgroundColor: '$black',

      '.tabs__list': {
        display: 'flex',
        alginItems: 'center',

        '.list__item--active': {
          height: '100%',
          backgroundColor: '$primary'
        },

        '.list__item': {
          listStyle: 'none',
          textDecoration: 'none',
          textTransform: 'none',
          padding: '0.5rem',
          fontSize: '0.75rem',
          color: '$text'
        }
      },

      '.moreOptions': {
        '.icon': {
          fontSize: '1rem'
        },

        '.icon--arrow': {
          color: '$grey'
        },

        '.icon--help': {
          color: '$primary',
          marginLeft: '0.5rem',
          marginRight: '0.3rem'
        }
      }
    },

    '.searchBar': {}
  }
})
