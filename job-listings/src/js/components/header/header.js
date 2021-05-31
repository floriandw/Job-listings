import React from "react";

import { useStyles } from '../../styles/headerStyle';

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.header}/>
        </>
    )
}

export default Header;