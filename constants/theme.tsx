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
          width: "100%",
          borderRadius: "2px",
          color: "white",
          _placeholder: {
            color: "placeholder",
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
          borderColor: "border.black",
          borderWidth: "2px",
          borderStyle: "solid",
          _disabled: {
            opacity: 0.5,
          },

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
        menuHeading: {
          fontFamily: "HK Grotesk",
          fontWeight: 300,
          fontSize: "2rem",
          textTransform: "uppercase",
        },
        menuItem: {
          fontFamily: "HK Grotesk",
          fontWeight: 500,
          fontSize: "1.3rem",
          whiteSpace: "nowrap",
        },
        input: {
          color: "placeholder",
        },
      },
    },
  },

  semanticTokens: {},

  colors: {
    background: "#18181C",
    black: "#000",
    white: "#fff",
    darkText: "#444444",
    placeholder: "#8B8B8D",
    brand: {
      100: "#8A2900",
    },

    border: {
      black: "#22252F",
    },
  },

  // breakpoints,
});

export default theme;
