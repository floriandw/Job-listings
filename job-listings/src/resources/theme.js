import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        background: {
            default: "#e0f2f1",
        },
        secondary: {
            main: '#b2dfdb',
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