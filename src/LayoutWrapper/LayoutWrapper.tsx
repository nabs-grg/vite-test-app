import { use100vh } from 'react-div-100vh'
import { Box } from '@mantine/core'
import { createStyles } from '@mantine/emotion'

import { LayoutWrapperProps } from './LayoutWrapper.types'
// import * as Styles from './LayoutWrapper.styles'

const useStyles = createStyles(() => ({
  root: {
    display: 'flex',
    flex: '1',
    justifyItems: 'center',
    alignItems: 'stretch',
    height: '100%',
    maxWidth: '100%',
    overflowX: 'hidden',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #F4F5F7 27%, #FCFCFD -27%)',

    '@media (min-width: 600px)': {
      alignItems: 'center'
    }
  }
}))

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const height = use100vh()
  const { classes } = useStyles()

  return (
    <Box
      className={classes.root}
      style={{
        minHeight: `${height}px`
      }}
    >
      {children}
    </Box>
  )
}
