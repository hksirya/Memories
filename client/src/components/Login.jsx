import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center  mx-auto p-20">
      <div className="max-w-xl p-10 bg-slate-100 bg-opacity-80 rounded-xl py-14">
        <h1 className="ml-4 flex font-poppins text-4xl font-bold ">Login</h1>
        <form className="mt-10 space-y-6">
          <input
            type="email"
            placeholder="Please Enter the Email"
            className="p-4 w-full bg-white rounded-lg placeholder:font-poppins"
            label="Email"
          />
          <input
            type="password"
            placeholder="Please Enter Your password"
            className="p-4 w-full bg-white rounded-lg placeholder:font-poppins"
            label="Email"
          />
          <button className="w-full bg-green-500 text-white font-poppins p-4 rounded-lg">
            Login
          </button>
        </form>

        <p className="flex font-poppins text-gray-700 mt-8 items-center justify-center">
          Donot have an account ?
          <Link to="/register" className="text-blue-600">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
