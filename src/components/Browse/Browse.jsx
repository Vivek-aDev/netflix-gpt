import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
