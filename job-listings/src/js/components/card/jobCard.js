import React,{ useState } from 'react';

import { useStyles } from '../../styles/jobCard';
import { Card, Avatar, Divider, CardContent, Typography  } from '@material-ui/core';
import Tag from "../tags/tag";
import InfoTags from "../tags/infoTags";
import myhome from "./images/myhome.svg"

const JobCard = (props) => {
    const job = props.job
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    console.log(props);
    console.log(props.role);
    const [info] = useState([job.role, job.level, ...job.tools, ...job.languages]);


    console.log(myhome);
    console.log(typeof job.logo);

    return (
        <>
       
        <Card className={`${classes.root} ${job.featured ? classes.featured : ""}`} >
        <Avatar className={classes.avatar} alt="Remy Sharp" src={job.logo} />
            {console.log(job.logo)}
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