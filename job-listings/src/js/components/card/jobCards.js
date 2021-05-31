import React from "react";
import JobCard from "./jobCard";

const JobCards = () => {
    const data = require("../../../resources/data.json");  

    return (
        <>
            {data.map((job) => {
                return (
                    <JobCard key={job.id} job={job} />
                );
            })}        
        </>
    );
}

export default JobCards;