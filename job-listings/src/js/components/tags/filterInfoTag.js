import React from "react";
import { useDispatch } from 'react-redux'
import { Card, Container } from "@material-ui/core";

import { useStyles } from '../../styles/filterInfoTagStyle';
import { removeFilterItem } from "../../store/actions/filterActions";
import CloseIcon from '@material-ui/icons/Close';

const FilterInfoTag = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();
   
    const removeTagFilter = (props) => { 
        dispatch(removeFilterItem(props))
    }
    
    return (  
        <Card onClick={() => (removeTagFilter(props.item))} elevation={0} className={classes.root} >
            <Container className={classes.container}>
                {props.item}
            </Container>
            <CloseIcon className={classes.removeIcon} />
        </Card>
    );
}

export default FilterInfoTag;