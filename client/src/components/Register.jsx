import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center  mx-auto p-20">
      <div className="max-w-xl p-20 bg-slate-100 bg-opacity-80 rounded-xl py-12">
        <h1 className="ml-4 flex font-poppins text-4xl font-bold">Register</h1>
        <form className="mt-10 space-y-6">
          <input
            type="Name"
            placeholder="Please Enter Your Name"
            className="p-4 w-full bg-white rounded-lg placeholder:font-poppins"
            label="name"
          />
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
            label="password"
          />
          <button className="w-full bg-green-500 text-white font-poppins p-4 rounded-lg">
            Register
          </button>
        </form>

        <p className="flex font-poppins text-gray-700 mt-8 items-center justify-center">
          Already have an account ?
          <Link to="/login" className="text-blue-600">
            {"  "}Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
