import React,{ useState, useEffect } from 'react';

import { useStyles } from '../../styles/jobCard';
import { Card, Divider, CardContent, Typography  } from '@material-ui/core';
import Tag from "../tags/tag";
import InfoTags from "../tags/infoTags";

const JobCard = (props) => {
    const job = props.job
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    console.log(props);
    console.log(props.role);
    const [info, setInfo] = useState([job.role, job.level, ...job.tools, ...job.languages]);


    console.log(info);
    console.log(job.featured);

    return (
        <Card className={`${classes.root} ${job.featured ? classes.featured : ""}`} >
            <CardContent style={{whiteSpace:'pre-wrap'}}>
                <Typography style={{float:"left",marginRight: "10px", marginBottom:"12px", fontFamily:"spartan",fontWeight: 700, color: "#5da5a4"}}>
                   {job.company}
                </Typography>
                <Typography component={'span'}>
                    {job.new ? <Tag name="NEW!" /> : ""}
                    {job.featured ? <Tag name="FEATURED" /> : ""}
                </Typography>
                <Typography style={{marginBottom:"10px",color: "black", fontWeight: "bold",  width: "100%", clear: "both"}}>
                   {job.position}
                </Typography>
                <Typography style={{marginBottom: "15px", color:"#7B8E8E"}}>
                    {job.postedAt} • {job.contract} • {job.location}
                </Typography>
                <Divider  />
                <Typography style={{marginTop: "15px", display: "block"}} component={'span'} >
                    <InfoTags items={info}/>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default JobCard;