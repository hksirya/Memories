import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row min-w-full p-4 md:p-10 md:space-x-10">
      <div className="flex flex-col w-[1/2] mt-20 px-6 ">
        <h1 className="font-poppins   text-5xl md:text-8xl text-transparent bg-clip-text font-semibold bg-gradient-to-r from-purple-400 to-pink-600 max-w-xl ">
          Find the unexplored
        </h1>
        <p className=" mt-10 text-lg md:text-2xl font-poppins  font-base text-transparent bg-clip-text bg-gradient-to-l from-gray-600 to-white max-w-xl ">
          {" "}
          With Memories you can find the Unexplored and Untravelled tourist
          destinations accross India.
        </p>
        <div className="w-full md:w-[1/3]">
          <button className="font-poppins bg-blue-600 mt-10  text-lg md:text-xl font-semibold text-white p-4 rounded-xl ">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex mt-10 md:w-[1/2] ">
        <img
          className="w-full rounded-2xl border border-white "
          src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
          alt="destination_img"
        />
      </div>
    </div>
  );
};

export default Hero;
