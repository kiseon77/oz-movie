import "./App.css";
import MovieCard from "./components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import NavBar from "./components/NavBar";

function App() {
  const url = "https://api.themoviedb.org/3/movie/popular?language=ko&page=1";

  const [movieListApi] = useFetch(url, "GET");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (movieListApi) setMovieList(movieListApi.results);
    console.log("hi");
  }, [movieListApi]);

  return (
    <>
    <NavBar/>
      <main className="m-8 grid grid-cols-4 gap-8">
        {movieList.map((movie) => {
          return (
            <Link to={`/details/${movie.id}`} key={movie.id}>
              <MovieCard
                poster={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
              />
            </Link>
          );
        })}
      </main>
    </>
  );
}

export default App;
