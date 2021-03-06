import React,{ useState, useEffect } from 'react';

import { useStyles } from '../../styles/jobCardStyle';
import { Card, Avatar, Divider, CardContent, Typography } from '@material-ui/core';
import Tag from "../tags/tag";
import InfoTags from "../tags/infoTags";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/itemsActions";

const JobCard = (props) => {
    const job = props.job
    const classes = useStyles();
    const [info] = useState([job.role, job.level, ...job.tools, ...job.languages]);
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(addItem([job.role, job.level, ...job.tools, ...job.languages]))
    }, []);

    return (
        <>
            <Card className={`${classes.root} ${job.featured ? classes.featured : ""}`} >
            <Avatar src={job.logo} className={classes.avatar} alt="Remy Sharp" />
                <CardContent className={classes.content}>
                    <div className={classes.middle} >
                        <Typography className={classes.company}>
                        {job.company}
                        </Typography>
                        <Typography component={'span'}>
                            {job.new ? <Tag name="NEW!" /> : ""}
                            {job.featured ? <Tag name="FEATURED" /> : ""}
                        </Typography>
                        <Typography className={classes.position}>
                        {job.position}
                        </Typography>
                        <Typography className={classes.extraInfo}>
                            {job.postedAt}  •  {job.contract}  •  {job.location}
                        </Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.info} component={'span'} >
                        <InfoTags items={info}/>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default JobCard;