import React from "react";

import { AppBar } from "@material-ui/core";
import { useStyles } from '../../styles/headerStyle';

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static" className={classes.customizeToolbar}></AppBar>
        </>
    )
}

export default Header;