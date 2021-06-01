import React from "react";
import { useDispatch } from 'react-redux'
import { Card } from "@material-ui/core";

import { useStyles } from '../../styles/infoTagStyle';
import { addFilterItem } from "../../store/actions/filterActions"

const InfoTag = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();
   
    const addTagFilter = (props) => { 
        const name = props.item
        dispatch(addFilterItem(name))
    }

    return (  
        <Card onClick={()=> {addTagFilter(props)}} elevation={0} className={classes.root} >
            {props.item}
        </Card>
    );
}

export default InfoTag;