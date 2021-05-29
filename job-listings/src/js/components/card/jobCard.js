import React from 'react';

import { useStyles } from '../../styles/jobCard';
import { Card } from '@material-ui/core';
import { CardContent, Typography } from '@material-ui/core';
import Tag from "./tag";

const JobCard = (props) => {
    const job = props.job
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    console.log(job.featured);

    return (
        <Card className={`${classes.root} ${job.featured ? classes.featured : ""}`} >
            <CardContent>
                <Typography style={{float:"left",marginRight: "10px"}}>
                   {job.company}
                </Typography>
                <Typography component={'span'}>
                    {job.new ? <Tag name="NEW!" /> : ""}
                    {job.featured ? <Tag name="FEATURED" /> : ""}
                </Typography>
                <Typography>
                   {job.position}
                </Typography>
                <Typography>
                {job.postedAt}
                </Typography>
                <br />
                <Typography>
                {job.position}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default JobCard;