import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      "html,body": {
        backgroundColor: "background",
      },
      ".line": {
        width: "100%",
        height: ".1rem",
        backgroundColor: "white",
      },
    }),
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          backgroundColor: "background",
          width: "20rem",
          borderColor: "border.black",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "2px",
          color: "white",
          _placeholder: {
            color: "white",
          },
        },
      },
    },

    Button: {
      baseStyle: {
        fontWeight: 500,
      },
      variants: {
        solid: (props: any) => ({
          color: "white",
          bg: "brand.100",
          outlineColor: "transparent",
          margin: "10rem",
          borderColor: "border.black",
          borderWidth: "2px",
          borderStyle: "solid",
          _hover: {
            bg: "brand.100",
            borderColor: "white",
          },
        }),
      },
    },
    Link: {
      baseStyle: {
        fontWeight: 500,
        color: "white",
        fontSize: "2rem",
        fontFamily: "Mona Sans",
      },
      variants: {
        nav: (props: any) => ({
          _hover: "",
          fontSize: "1.4rem",
        }),
        navUnderline: (props: any) => ({
          textTransform: "lowercase",
          textDecoration: "underline",
          textUnderlineOffset: "0.4rem",
          _hover: "",
          fontSize: "1.2rem",
        }),

        title: {
          fontSize: "3rem",
          fontFamily: "Sinoreta",
        },
      },
      footerNav: {
        fontFamily: "HK Grotesk",
        fontWeight: 400,
        color: "black",
      },
    },
    Text: {
      baseStyle: {
        color: "white",
        fontFamily: "Mona Sans",
        fontWeight: 500,
      },
      variants: {
        title: {
          fontFamily: "Sinoreta",
          fontSize: "6rem",
        },
        secondaryTitle: {
          fontFamily: "Sinoreta",
          fontSize: "4rem",
        },
        italicTitle: {
          fontFamily: "HK Grotesk",
          fontSize: "6rem",
          fontStyle: "italic",
          fontWeight: 300,
          textTransform: "uppercase",
          color: "darkText",
        },
        heading: {
          fontFamily: "HK Grotesk",
          fontWeight: 500,
          fontSize: "3rem",
        },
      },
    },
  },

  semanticTokens: {
    colors: {
      text: {
        default: "#fff",
      },
    },
    radii: {
      button: "2px",
      circleButton: "50%",
    },
  },

  colors: {
    background: "#18181C",
    black: "#000",
    white: "#fff",
    darkText: "#444444",
    brand: {
      100: "#8A2900",
    },
    border: {
      black: "#22252F",
      brand: {
        100: "#975b42",
      },
    },
  },

  // breakpoints,
});

export default theme;
