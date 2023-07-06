import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f2f8ff",
      100: "#c7e2fe",
      200: "#9ecbfe",
      300: "#71a9fe",
      400: "#4294fe",
      500: "#0080fe",
      600: "#0064c7",
      700: "#004899",
      800: "#002c66",
      900: "#001342",
    },
    secondary: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.600",
        lineHeight: "tall",
				width: "100%",
      },
      a: {
        color: "teal.500",
      },
      "*": {
        boxSizing: "border-box",
      },
      "#root": {
        // backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      },
    },
  },
});

export default theme;
