import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mx-auto md:p-20 p-10 space-y-10 md:space-y-0 items-center border-b-2  border-gray-700">
        <div className="flex flex-col">
          <div className="flex flex-row space-x-2 items-center">
            <Link
              to="/"
              className="font-poppins md:text-4xl text-5xl text-white "
            >
              Memories
            </Link>
            <img
              className="w-6 h-6 object-contain"
              src="https://img.icons8.com/material-sharp/24/FFFFFF/memories.png"
            />
          </div>

          <p className=" mt-2 text-2xl font-poppins  font-base text-transparent bg-clip-text bg-gradient-to-l from-gray-600 to-white max-w-xl ">
            {" "}
            Find the unexplored
          </p>
        </div>

        <div className="flex flex-row space-x-8 md:space-x-16 font-poppins  ">
          <div className="flex flex-col space-y-6 ">
            <h1 className="font-semibold text-white">Useful Links</h1>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white duration-200 cursor-pointer">
                Content
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                How it Works
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                Create
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                Explore
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                Terms & Services
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6  ">
            <h1 className="font-semibold text-white">Community</h1>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white duration-200 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                Partners
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                Newsletters
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                Suggestions
              </li>
              <li className="hover:text-white duration-200 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6 ">
            <h1 className="font-semibold text-white">Partner</h1>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white duration-200 cursor-pointer">
                Our Partner
              </li>

              <li className="hover:text-white duration-200 cursor-pointer">
                Become a Partner
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-6 p-10 items-center justify-between ">
        <h1 className="text-gray-400 font-poppins text-base ">
          Copyright Ⓒ 2023 Memories. All Rights Reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
