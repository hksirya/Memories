import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../actions/post";
import { useDispatch } from "react-redux";

const Post = ({ post, setCurrentId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setCurrentId(post._id);
    navigate("/createPost");
  };

  const truncate = (str) => {
    return str?.length > 125 ? str.substring(0, 125) + "..." : str;
  };

  return (
    <div
      key={post._id}
      className="relative max-w-[85%] md:max-w-sm rounded-lg overflow-hidden cursor-pointer bg-slate-100 "
    >
      <img
        className="w-full h-56 object-fill"
        src={post.selectedFile}
        alt="Sunset in the mountains"
      />

      <div className="px-6 mt-6 space-y-2">
        <div className="font-bold text-xl font-poppins">{post.title}</div>
        <p className="text-gray-700 text-base font-poppins">
          {truncate(post.message)}
        </p>
      </div>
      <div className="px-6 pt-4 "></div>
      <div className="flex items-center justify-between px-6 mb-4">
        <button className="flex space-x-2" onClick={() => <div></div>}>
          <FiThumbsUp size={25} className="cursor-pointer" />
          <p className="font-poppins text-gray-700 ">{post.likeCount}</p>
        </button>

        <button onClick={() => dispatch(deletePost(post._id))}>
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </button>
      </div>
      <div className="flex flex-col mx-auto p-4 items-center justify-center font-poppins space-y-1  text-slate-500 mt-2 border-t-2">
        <p className="text-sm"> {`Created by ${post.creator}`}</p>
        <p className="text-xs">{moment(post.createdAt).fromNow()}</p>
      </div>

      <button
        onClick={handleEditClick}
        className="absolute top-5 right-5 bg-gray-200 rounded-full p-1 hover:scale-105 duration-200 "
      >
        <BiDotsHorizontalRounded size={22} />
      </button>
    </div>
  );
};

export default Post;
