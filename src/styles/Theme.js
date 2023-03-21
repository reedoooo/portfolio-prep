import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    secondary: {
      50: "#FEE6E6",
      100: "#FDC3C3",
      200: "#FB9898",
      300: "#F66E6E",
      400: "#EF4E4E",
      500: "#E12D39",
      600: "#CF1124",
      700: "#AB091E",
      800: "#8A041A",
      900: "#610316",
    },
    accent: {
      50: "#F2F5FA",
      100: "#E5EBF5",
      200: "#D2DCEC",
      300: "#B8C7E1",
      400: "#9FB5D5",
      500: "#7F98BA",
      600: "#627D9B",
      700: "#4E6381",
      800: "#3B4B67",
      900: "#2A3447",
    },
    success: {
      50: "#E6FCF6",
      100: "#BFF6E9",
      200: "#8AF0D8",
      300: "#4AE4C3",
      400: "#24D1A6",
      500: "#10B981",
      600: "#089E67",
      700: "#047B4C",
      800: "#025639",
      900: "#003F29",
    },
    warning: {
      50: "#FFF8E5",
      100: "#FFECC2",
      200: "#FFD680",
      300: "#FFC24C",
      400: "#FFB200",
      500: "#FF8F00",
      600: "#FF6F00",
      700: "#F45D00",
      800: "#D44C00",
      900: "#9E3800",
    },
    error: {
      50: "#FFE3E3",
      100: "#FFBDBD",
      200: "#FF9B9B",
      300: "#F86A6A",
      400: "#EF4E4E",
      500: "#E12D39",
      600: "#CF1124",
      700: "#AB091E",
      800: "#8A041A",
      900: "#610316",
    },  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
//   fontSizes: {
//     // your font size definitions here
//   },
//   fontWeights: {
//     // your font weight definitions here
//   },
//   lineHeights: {
//     // your line height definitions here
//   },
//   letterSpacings: {
//     // your letter spacing definitions here
//   },
//   styles: {
//     global: (props) => ({
//       body: {
//         fontFamily: "body",
//         zIndex: "2",
//         color: mode("gray.800", "whiteAlpha.900")(props),
//         bg: mode("white", "gray.800")(props),
//         lineHeight: "base",
//       },
//       "*::placeholder": {
//         color: mode("gray.400", "whiteAlpha.400")(props),
//       },
//       "*": {
//         borderColor: mode("gray.200", "whiteAlpha.300")(props),
//         wordWrap: "break-word",
//       },
//     }),
//   },
});

export default theme;
