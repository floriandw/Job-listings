import { createMuiTheme } from "@material-ui/core/styles";

import './fonts.css';

export const theme = createMuiTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 200,
          md: 800,
          lg: 1280,
          xl: 1920,
        },
      },
    palette: {
        background: {
            default: "#e0f2f1",
        },
        secondary: {
            main: '#b2dfdb',
          },
        primary: {
            main: "#05FAFA"
        },
        dark: {
            main: "004d40"
        }
    },
    typography: {
        fontFamily: "Spartan",
        fontWeight: 500,
        fontSize: "15px",
        useNextVariants: true,
        button: {
            fontWeight: 500,
        },
    },
});