import React from "react";

const Movie = (props) => {
  // console.log("m",props);
  return (
    <div className="movie">
      <div className="movies">
        <li>{props.title}</li>
        <li>{props.text}</li>
        <li>{props.releaseDate}</li>
      </div>
    </div>
  );
};

export default Movie;
