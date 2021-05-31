import React from "react";
import { useDispatch } from 'react-redux'

import { Card, CardContent, } from "@material-ui/core";
import { useStyles } from '../../styles/infoTagStyle';
import { removeFilterItem } from "../../store/actions/filterActions";
import BackspaceIcon from '@material-ui/icons/Backspace';


const FilterInfoTag = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();
   
    const removeTagFilter = (props) => { 
        dispatch(removeFilterItem(props))
    }
    console.log(props.item)
    return (  
        <Card onClick={() => (removeTagFilter(props.item))} elevation={0} className={classes.root} >
            {props.item}
            <BackspaceIcon />
        </Card>

    );
}

export default FilterInfoTag;