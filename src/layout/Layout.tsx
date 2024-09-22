import { use100vh } from 'react-div-100vh'
import { useMediaQuery } from '@mantine/hooks'

import { LayoutWrapper } from '../LayoutWrapper/LayoutWrapper'
// import * as Styles from './Layout.styles'
import { LayoutProps } from './Layout.types'
import { Box } from '@mantine/core'
import { createStyles } from '@mantine/emotion'

const useStyles = createStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    padding: 0,
    background: '#fff',

    '*': {
      fontFamily: 'Inter, sans-serif'
    },

    '@media(min-width: 600px)': {
      width: '100%',
      minWidth: '448px',
      alignItems: 'center',
      borderRadius: '8px',
      boxShadow: '0px 40px 72px rgba(7, 12, 24, 0.08)'
    }
  }
}))

export function Layout({ children }: LayoutProps) {
  const height = use100vh()
  const { classes } = useStyles()

  const isMobileScreen = useMediaQuery('(max-width: 600px)')
  const maxHeight = 875 // arbitrary value including potential error messages

  const getHeight = (type: 'min' | 'max') => {
    if (isMobileScreen) {
      return type === 'max' ? 'auto' : `${height}px`
    }

    return height! > maxHeight ? `${maxHeight}px` : `${height! - 20}px`
  }

  return (
    <LayoutWrapper>
      <Box
        className={classes.root}
        style={{
          minHeight: getHeight('min'),
          maxHeight: getHeight('max')
        }}
      >
        {children}
      </Box>
    </LayoutWrapper>
  )
}
