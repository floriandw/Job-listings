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
                <Container style={{maxWidth: "1500px", minWidth: "400px"}}>
                    <JobCards />                  
                </ Container>
        </MuiThemeProvider>
    )
}

export default homePage;