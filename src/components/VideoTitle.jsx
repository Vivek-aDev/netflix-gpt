import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-600 px-12 text-white py-4 rounded-md text-xl bg-opacity-50">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-600 px-12 text-white py-4 rounded-md text-xl bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
