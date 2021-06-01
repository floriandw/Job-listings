import React from "react";

import InfoTag from "./infoTag";

const InfoTags = (props) => {
  
    return (
        <>
            {props.items.map((item,index) => {            
                return (
                    <InfoTag key={index} item={item}/>
                )
            })}
        </>       
    );
}

export default InfoTags;