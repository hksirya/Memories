import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="flex justify-between p-6">
      <div className="flex flex-row space-x-2 items-center">
        <Link to="/" className="font-poppins text-3xl text-white ">
          Memories
        </Link>
        <img
          className="w-6 h-6 object-contain"
          src="https://img.icons8.com/material-sharp/24/FFFFFF/memories.png"
        />
      </div>
      <div className="hidden md:flex items-center space-x-10 font-poppins text-gray-300">
        <Link to="/" className=" hover:text-white">
          About us{" "}
        </Link>
        <Link to="/destination" className=" hover:text-white">
          Destinations{" "}
        </Link>
        <Link to="/" className=" hover:text-white">
          Contact us
        </Link>
        <Link
          to="/login"
          className="bg-blue-600 p-2 px-6 rounded-lg font-base font-poppins text-white hover:opacity-80 duration-300"
        >
          Login
        </Link>
        <Link
          to="/createPost"
          className="bg-blue-600 p-2 px-6 rounded-lg font-base font-poppins text-white hover:opacity-80 duration-300"
        >
          Create Post
        </Link>
      </div>

      <div className="md:hidden flex ">
        {toggle ? (
          <AiOutlineAlignRight
            size="35px"
            color="white"
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer"
          />
        ) : (
          <AiOutlineClose
            size="28px"
            color="white"
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer"
          />
        )}
      </div>

      {!toggle && (
        <div
          className="fixed left-0 top-0 w-full h-screen bg-black/70 cursor-pointer ease-in duration-300 z-10"
          onClick={() => setToggle(!toggle)}
        >
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen white-glassmorphism transition sidebar p-20">
            <div className="flex flex-row space-x-2 items-center border-b-2 border-gray-400">
              <Link to="/" className="font-poppins text-3xl text-white ">
                Memories
              </Link>
              <img
                className="w-6 h-6 object-contain"
                src="https://img.icons8.com/material-sharp/24/FFFFFF/memories.png"
              />
            </div>
            <div className="flex flex-col py-20 space-y-20 font-poppins text-gray-300 justify-between text-xl">
              <Link to="/" className=" hover:text-white">
                About us{" "}
              </Link>
              <Link to="/destination" className=" hover:text-white">
                Destinations{" "}
              </Link>
              <Link to="/" className=" hover:text-white">
                Contact us
              </Link>

              <div className="flex">
                <Link
                  to="/login"
                  className="bg-blue-600 p-2 px-6 rounded-lg font-base font-poppins text-white hover:opacity-80 duration-300"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
