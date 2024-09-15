import React from "react";
import Header from "../Header/Header";

import netflixBg from "../../assets/Netflix-bg.jpg";

const Login = () => {
  return (
    <div>
      <Header />
      <img src={netflixBg} alt="background-img" />
    </div>
  );
};

export default Login;
