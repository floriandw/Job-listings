import React from 'react';

import { useStyles } from '../../styles/jobCard';
import { Card } from '@material-ui/core';
import { CardContent, Typography } from '@material-ui/core';

const JobCard = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography>
                   job Place 
                </Typography>
                <Typography>
                    Job Title
                </Typography>
                <Typography>
                    time
                </Typography>
                <br />
                <Typography>
                    tags
                </Typography>
            </CardContent>
        </Card>
    )
}

export default JobCard;