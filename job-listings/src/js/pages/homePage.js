import React from "react";

import { Container, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import JobCard from "../components/card/jobCard";
import { theme } from "../../resources/theme";
import Header from "../components/header/header";

const homePage = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
                <Header />
                <Container maxWidth="md">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </ Container>
        </MuiThemeProvider>
    )
}

export default homePage;