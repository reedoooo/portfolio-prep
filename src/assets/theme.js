import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f2f8ff',
      100: '#c7e2fe',
      200: '#9ecbfe',
      300: '#71a9fe',
      400: '#4294fe',
      500: '#0080fe',
      600: '#0064c7',
      700: '#004899',
      800: '#002c66',
      900: '#001342',
    },
    secondary: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    // tertiary: {
    //   50: '#FFF5F2',
    //   100: '#FFE4D9',
    //   200: '#FFD1BF',
    //   300: '#FFBFA5',
    //   400: '#FFAC8C',
    //   500: '#FF9972',
    //   600: '#CC7A5A',
    //   700: '#995C42',
    //   800: '#663D2A',
    //   900: '#332013',
    // },
    tertiary: {
      50: '#66d3cf', // Light cyan
      100: '#57c9c6', // Light cyan 2
      200: '#47bfbf', // Light Caribbean current
      300: '#37b5b8', // Light Caribbean current 2
      400: '#28abaf', // Light Midnight green
      500: '#18a1a6', // Light Indigo dye
      600: '#08968f', // Light Berkeley blue
      700: '#008c79', // Light Oxford blue
      800: '#008163', // Light Penn blue
      900: '#00774e', // Light greenish-blue
    },

    quaternary: {
      50: '#319795', // Dark cyan
      100: '#2C878B', // Dark cyan 2
      200: '#267A7E', // Adjusted Caribbean current
      300: '#206D70', // Adjusted Caribbean current 2
      400: '#1A6063', // Adjusted Midnight green
      500: '#145356', // Adjusted Indigo dye
      600: '#0E4649', // Adjusted Berkeley blue
      700: '#08393C', // Adjusted Oxford blue
      800: '#022C2F', // Adjusted Penn blue
      900: '#001F22', // Very dark greenish-blue
    },
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
        width: '100%',
      },
      a: {
        color: 'teal.500',
      },
      '*': {
        boxSizing: 'border-box',
      },
      '#root': {
        // backgroundColor: "#f5f5f5",
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
});

export default theme;
