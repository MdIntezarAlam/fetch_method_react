import { useCallback, useEffect, useState } from "react";
import MovieList from "./component/MovieList";
// import dummyData from "./component/dummyData";
import "./App.css";
import AddMovie from "./component/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const responce = await fetch("https://swapi.py4e.com/api/films/");
      if (!responce.ok) {
        throw new Error("Somthing went wrong");
      }
      const data = await responce.json();
      const transformData = data.results.map((allDate) => {
        return {
          id: allDate.episode_id,
          title: allDate.title,
          text: allDate.opening_crawl,
          releaseDate: allDate.release_date,
        };
      });
      setMovies(transformData);
    } catch (error) {
      setError(error.messGE);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);



  let content = <p>movies no found</p>;
  if (movies.length) {
    content = <MovieList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>movies Loading...</p>;
  }

  return (
    <div className="App">
      <section>
        <button onClick={fetchingData}>Fetch Movie</button>
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
