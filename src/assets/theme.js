import { extendTheme } from '@chakra-ui/react';

// Importing styles and colors from their respective modules
import colors from './styles/organized/Colors.js';
import { styles as externalStyles } from './styles/organized/styles.js';
import { textStyles } from './styles/organized/Typography';
import { buttonStyles } from './styles/organized/Buttons';
import { breakPoints, breakpoints2 } from './styles/organized/Breakpoints';
import { componentStyles } from './styles/organized/Components';
import { globalStyles } from './styles/organized/GlobalStyles';

const theme = extendTheme({
  colors,
  breakpoints: {
    xs: '20em',
    sm: '28em',
    md: '36em', // 768px <-- avg mobile
    lg: '45em', // 992px
    xl: '60em',
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
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
  // Merging other styles here
  textStyles,
  buttonStyles,
  globalStyles,
  breakPoints,
  breakpoints2,
  componentStyles,
  externalStyles,
});

export { theme };
export default theme;
