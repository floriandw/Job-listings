import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Card,Link, Button } from "@material-ui/core";
import InfoTags from "./infoTags";

import { useStyles } from "../../styles/filterTagsStyle";
import { clearFilterItems } from "../../store/actions/filterActions";
const FilterTags = () => {

    const dispatch = useDispatch()
    const filters = useSelector(state => state.filterItems)
    const classes = useStyles();

    console.log(filters.length)
    return (
        <>
            {filters.length > 0 ?
            
                <Card elevation={0} className={classes.root}>
                    
                <InfoTags items={filters}/>
                <Link component="button"
                        style={{ 
                            float:"right", 
                            alignContent:"center"
                        }}
                        onClick={() => {dispatch(clearFilterItems())}}
                    >
                        Clear
                    </Link>
                </Card>
                :
                ""
            }
        </>
    )

}

export default FilterTags;