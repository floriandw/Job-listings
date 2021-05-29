import React from "react";

import { Card } from "@material-ui/core";

const tag = (props) => {
    console.log(props)
    return (
        <Card style={{ backgroundColor: props.name === "FEATURED" ? "black" : "#5da5a4" ,   borderBottomRightRadius:"15px 50%",borderTopRightRadius:"15px 50%",borderTopLeftRadius:"15px 50%",borderBottomLeftRadius:"15px 50%",display:"inline", width: "auto", padding:"7px",color: "white", margin: "5px", fontWeight:"700", fontSize: "15px"}}>
            {props.name}
        </Card>
    );
}

export default tag;