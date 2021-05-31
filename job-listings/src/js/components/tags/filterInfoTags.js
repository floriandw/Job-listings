import React from "react";

import FilterInfoTag from "./filterInfoTag";

const InfoTags = (props) => {
    return (
        <>
            {props.items.length > 0 ?
                <>
                    {props.items.map((item,index) => {
                        return (
                            <FilterInfoTag key={index} item={item}/>
                        )
                    })}
                </>
            : ""}
        </>
    );
}

export default InfoTags;