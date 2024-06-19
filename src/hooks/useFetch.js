import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }
    
    fetchMovies();
  }, [apiPath, queryTerm]);

  return { data };
};
