// THIS IS WHERE ALL THE LOGIC WILL GO
// WE WILL WRITE LOGIC AND EXPORT IT BACK TO BE USED BY THE ROUTES TO MAKE THE CODE HIGHLY SCALABLE AND DO WONDERS

import express from "express";
import mongoose from "mongoose";

import PostMessage from "../mongoDB/models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);
    await newPost.save();
    console.log(newPost);
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post with that ID");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post with that ID");

  await PostMessage.findByIdAndDelete(id);

  res.json({ message: "Post was Successfully removed" });
};
