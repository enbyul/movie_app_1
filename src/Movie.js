import React from "react";
import PropTypes from "prop-types";

function Movie(){
    return(
        <h2></h2>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}