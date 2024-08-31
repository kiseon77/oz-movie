import "./App.css";
import MovieCard from "./components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Layout from "./components/Layout";

function App() {
  const url = "https://api.themoviedb.org/3/movie/popular?language=ko&page=1";

  const [movieListApi] = useFetch(url, "GET");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (movieListApi) setMovieList(movieListApi.results);
  }, [movieListApi]);

  return (
    <Layout setMovieList={setMovieList} searchBar="block" showSign="block">
      <main className="m-8 grid gap-8 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5">
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
    </Layout>
  );
}

export default App;
