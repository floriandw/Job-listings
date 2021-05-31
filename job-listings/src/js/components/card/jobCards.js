import React from "react";
import JobCard from "./jobCard";

import { useSelector } from "react-redux";

const JobCards = () => {
    const data = require("../../../resources/data.json"); 
    const filters = useSelector(state => state.filterItems);
    const items = useSelector(state => state.items);

    return (
        <>
            {data.map((job, index) => {
                console.log(filters)
                console.log(items[index])
                return (
                    <>                  
                        {filters.length === 0 || filters.some(x => items[index].includes(x)) ?
                            <JobCard key={job.id} job={job} />
                            :
                            ""
                        }
                    </>
                );
            })}        
        </>
    );
}

export default JobCards;