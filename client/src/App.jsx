import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";
import Posts from "./components/Posts/Posts";
const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="bg-primary">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/createPost"
            element={<Form currentId={currentId} setCurrentId={setCurrentId} />}
          />
          <Route
            path="/destination"
            element={<Posts setCurrentId={setCurrentId} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
