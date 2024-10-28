import React, { useEffect } from "react";
import Header from "../Header/Header";
import { API_OPTIONS } from "../../utils/constants";

const Browse = () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
