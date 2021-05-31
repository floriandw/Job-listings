import React from "react";

import InfoTag from "./infoTag";

const InfoTags = (props) => {
    console.log(props.items)
    return (
        <>
            {props.items.length >0 ?
            <>
            {props.items.map((item,index) => {
                console.log(item)
                return (
                    <InfoTag key={index} item={item}/>
                )
            })}
            </>
            : ""
        }
        </>
    );
}

export default InfoTags;