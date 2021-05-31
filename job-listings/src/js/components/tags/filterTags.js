import React from "react";
import { useSelector } from "react-redux";

const FilterTags = () => {

    const filters = useSelector(state => state.filterItems)

}

export default FilterTags;