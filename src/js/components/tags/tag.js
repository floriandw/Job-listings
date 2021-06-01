import React from "react";
import { Card } from "@material-ui/core";

import { useStyles } from "../../styles/tagStyle";

const Tag = (props) => {
    const classes = useStyles(props);

    return (
        <Card className={classes.root} >
            {props.name}
        </Card>
    );
}

export default Tag;