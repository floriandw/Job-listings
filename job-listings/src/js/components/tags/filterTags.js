import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Card, Link } from "@material-ui/core";
import FilterInfoTags from "./filterInfoTags";
import { useStyles } from "../../styles/filterTagsStyle";
import { clearFilterItems } from "../../store/actions/filterActions";

const FilterTags = () => {

    const dispatch = useDispatch()
    const filters = useSelector(state => state.filterItems)
    const classes = useStyles();

    return (
        <>
            {filters.length > 0 ?
            
                <Card elevation={0} className={classes.root}>
                    <FilterInfoTags items={filters}/>
                    
                    <Link container
                    alignItems="center"
                            justify="center" component="button"
                        style={{ 
                            float:"right", 
                            alignContent:"center",
                            color: "#5da5a4",
                            right: "30px",
                            top: "27px",
                            position:"absolute"
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