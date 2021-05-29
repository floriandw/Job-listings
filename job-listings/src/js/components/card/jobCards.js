import React from "react";

//import data require("../../../resources/data.json");
import JobCard from "./jobCard";
const JobCards = () => {
    const data = require("../../../resources/data.json");  

    console.log(data);
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