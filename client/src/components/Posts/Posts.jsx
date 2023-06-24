import { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import Post from "../Posts/Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return posts.length == 0 ? (
    <>
      <Loader />
    </>
  ) : (
    <div className="flex-1 md:p-8 mx-auto max-w-7xl mt-20 items-stretch space-y-14">
      <div className=" grid grid-col-1 gap-4 sm:grid-cols-2  md:grid-cols-3 md:gap-8 gap-y-10 place-items-center ">
        {posts &&
          posts.map((post) => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
      </div>
    </div>
  );
};

export default Posts;
