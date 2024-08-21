import "./App.css";
import movieListData from "../src/data/movieListData.json";
import MovieCard from "./components/MovieCard";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    setMovieList(movieListData.results);
  }, []);
  console.log(movieList);

  return (
    <main className="m-8 grid grid-cols-4 gap-8">
      {movieList.map((movie) => {
        return (
          <Link to={"/details"}>
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
            />
          </Link>
        );
      })}
    </main>
  );
}

export default App;
