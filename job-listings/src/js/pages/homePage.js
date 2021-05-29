import React from "react";

import { Container, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import JobCards from "../components/card/jobCards";
import { theme } from "../../resources/theme";
import Header from "../components/header/header";

const homePage = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
                <Header />
                <Container maxWidth="md">
                    <JobCards />                  
                </ Container>
        </MuiThemeProvider>
    )
}

export default homePage;