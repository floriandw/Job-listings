import React from "react";

import InfoTag from "./infoTag";

const InfoTags = (props) => {
  
    return (
        <>
            {props.items.map((item,index) =>            
                <InfoTag key={index} item={item}/>
            )}
        </>       
    );
}

export default InfoTags;