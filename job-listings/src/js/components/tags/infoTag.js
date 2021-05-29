import React from "react";

import { Card } from "@material-ui/core";

const InfoTag = (props) => {
    return (
        <Card elevation={0} style={{display:"inline-block", width: "auto",backgroundColor: "#EEF6F6",paddingLeft:"10px",paddingRight:"10px",paddingTop:"7px", paddingBottom:"7px",color: "#5da5a4", margin: "5px",marginRight:"15px", fontWeight:"700", fontSize: "15px"}}>
            {props.item}
        </Card>
    );
}

export default InfoTag;