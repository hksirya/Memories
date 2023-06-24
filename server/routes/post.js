// This is where all the routes will go and no logic will be there . Because there is no logic we can keep the code simple and easy to understand
// All the logic will be handled in the controllers

import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../Controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
