import { extendTheme, ThemeConfig, useColorModeValue } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false, // set to true if you want to automatically match the system's color mode
};

const theme = extendTheme({ 
  config,
  styles: {
    global: (props: any) => ({
      body: {
        color: props.colorMode === 'light' ? 'gray.800' : 'white',
        bg: props.colorMode === 'light' ? 'gray.50' : 'black'
      }
    }),
  },
  colors: {
    gray: {
      50: '#f9f9f9', // Very light gray for light mode background
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111'
    },
    black: '#000' // Pure black for dark mode background
  }
});

export default theme;
