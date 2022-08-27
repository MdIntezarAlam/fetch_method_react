import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  // console.log("ml", movies);
  return (
    <div className="ml">
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          text={movie.text}
          release_date={movie.releaseDate}
        />
      ))}
    </div>
  );
};

export default MovieList;
