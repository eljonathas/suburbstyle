import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  colors: {
    black: '#16161D'
  },
  fonts: {
    body: 'Inter, sans-serif'
  },
  breakpoints
})

export default theme
