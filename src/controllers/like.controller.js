import mongoose from "mongoose";
import { Like } from "../models/like.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/ApiResponse.js";

const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
});

const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
});

const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
});

const getLikedVideos = asyncHandler(async (req, res) => {});

export { toggleCommentLike, toggleTweetLike, toggleVideoLike, getLikedVideos };
