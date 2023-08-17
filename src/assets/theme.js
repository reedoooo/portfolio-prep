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
    quinary: {
      50: '#FFEFE5', // Very pale coral
      100: '#FFD6C1', // Pale coral
      200: '#FFBDA0', // Light coral
      300: '#FFA380', // Coral
      400: '#FF8960', // Dark coral
      500: '#FF7040', // Darker coral
      600: '#E66030', // Ambered coral
      700: '#B54A24', // Ambered brown
      800: '#833418', // Dark brown
      900: '#521E0C', // Very dark brown
    },
    // quinary: {
    //   50: '#FCE9E5', // Light coral pink
    //   100: '#F9C4BD', // Coral pink
    //   200: '#F59E94', // Light salmon
    //   300: '#F1776A', // Salmon
    //   400: '#ED5150', // Light coral
    //   500: '#E82A35', // Coral
    //   600: '#C3202D', // Dark coral
    //   700: '#9D161D', // Darker coral
    //   800: '#780C0E', // Almost maroon
    //   900: '#530305', // Maroon
    // },
    pentenary: {
      50: '#4db0a8', // Lightened version of Dark cyan
      100: '#46989d', // Lightened version of Dark cyan 2
      200: '#3f818f', // Lightened version of Adjusted Caribbean current
      300: '#37697f', // Lightened version of Adjusted Caribbean current 2
      400: '#305270', // Lightened version of Adjusted Midnight green
      500: '#284b60', // Lightened version of Adjusted Indigo dye
      600: '#20444f', // Lightened version of Adjusted Berkeley blue
      700: '#173d3e', // Lightened version of Adjusted Oxford blue
      800: '#0e362e', // Lightened version of Adjusted Penn blue
      900: '#052f1d', // Lightened version of Very dark greenish-blue
    },
    customColors: {
      translucentQuaternary50: 'rgba(49, 151, 149, 0.4)', // Dark cyan
      translucentQuaternary100: 'rgba(44, 135, 139, 0.4)', // Dark cyan 2
      translucentQuaternary200: 'rgba(38, 122, 126, 0.4)', // Adjusted Caribbean current
      translucentQuaternary300: 'rgba(32, 109, 112, 0.4)', // Adjusted Caribbean current 2
      translucentQuaternary400: 'rgba(26, 96, 99, 0.4)', // Adjusted Midnight green
      translucentQuaternary500: 'rgba(20, 83, 86, 0.4)', // Adjusted Indigo dye
      translucentQuaternary600: 'rgba(14, 70, 73, 0.4)', // Adjusted Berkeley blue
      translucentQuaternary700: 'rgba(8, 57, 60, 0.4)', // Adjusted Oxford blue
      translucentQuaternary800: 'rgba(2, 44, 47, 0.4)', // Adjusted Penn blue
      translucentQuaternary900: 'rgba(0, 31, 34, 0.4)', // Very dark greenish-blue
      translucentQuaternary901: 'rgba(0, 31, 34, 0.6)', // Very dark greenish-blue
    },
  },
  breakpoints: {
    xs: '20em',
    sm: '28em',
    md: '36em', // 768px <-- avg mobile
    lg: '45em', // 992px
    xl: '60em',
  },
  breakpoints2: {
    md: '36em', // 768px <-- avg mobile
    lg: '50em', // 992px
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
        fontSize: 'md',
        width: '100%',
        height: '100%',
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
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
});

export { theme };

export default theme;
