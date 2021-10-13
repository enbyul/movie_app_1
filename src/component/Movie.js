import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//state가 필요없을 경우 class컴포넌트 필요없고 function으로 작성

function Movies({ id, year, title, summary, poster, genres}){
    return (
        <div className="movies_movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">title : {title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => {
                        return <li className="genres_genre" key={index}>{genre}</li>
                    })}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    )
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movies;