import React, { useState, useEffect } from "react ";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost, updatePost } from "../../actions/post";

const Form = ({ currentId, setCurrentId }) => {
  const navigate = useNavigate();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
    navigate("/destination");
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center  mx-auto p-20">
      <div className="max-w-xl p-10 bg-slate-100 bg-opacity-80 rounded-xl py-14">
        <h1 className="ml-4 flex font-poppins text-4xl font-bold ">
          {currentId ? "Edit Post" : "Create Post"}
        </h1>
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Please Enter Your Name"
            className="p-4 w-full bg-white rounded-lg placeholder:font-poppins"
            label="name"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <input
            type="name"
            placeholder="Please Enter The Title"
            className="p-4 w-full bg-white rounded-lg placeholder:font-poppins"
            label="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Please Enter The Description"
            className="p-4 w-full bg-white rounded-lg placeholder:font-poppins"
            label="message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Please Enter the Tags"
            className="p-4 w-full bg-white rounded-lg placeholder:font-poppins"
            label="Tags"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          <div className="p-4 w-full bg-white rounded-lg ">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <button className="w-full bg-green-500 text-white font-poppins p-4 rounded-lg mt-10">
            Publish
          </button>
          <button
            to="/"
            onClick={clear}
            className="w-full bg-blue-600 text-white font-poppins p-4 rounded-lg mt-10"
          >
            Clear Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
