import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
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
        useNextVariants: true,
        button: {
            fontWeight: 500,
        },
    },
});