import React, { useEffect } from "react";
import Header from "../Header/Header";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
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
