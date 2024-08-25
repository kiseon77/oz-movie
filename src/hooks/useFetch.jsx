import { useEffect, useState } from "react";
const tmdbkey = import.meta.env.VITE_API_TMDB_KEY;
const tmdbtoken = import.meta.env.VITE_API_TMDB_READ_TOKEN;

export default function useFetch(url, method) {
  const [value, setValue] = useState();

  const options = {
    method: method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tmdbtoken}`,
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setValue(json))
      .catch((err) => console.error("error:" + err));
  }, [url]);

  return [value];
}
