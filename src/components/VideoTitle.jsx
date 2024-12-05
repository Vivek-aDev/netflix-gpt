import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex items-center">
        <button className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 transition duration-300 shadow-md px-12 py-4 rounded-md text-xl font-semibold">
          <FaPlay className="text-black" />
          Play
        </button>
        <button className="mx-2 bg-gray-600 text-white hover:bg-gray-700 transition duration-300 shadow-md px-12 py-4 rounded-md text-xl font-semibold bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
