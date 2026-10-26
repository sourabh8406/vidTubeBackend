import mongoose, { isValidObjectId } from "mongoose";
import { Playlist } from "../models/playlist.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
});

const getUserPlaylists = asyncHandler(async (req, res) => {
  const { userId } = req.body;
});

const getPlaylistById = asyncHandler(async (req, res) => {
  const { palylsitId } = req.params;
});

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
  const { palylsitId, videoId } = req.params;
});

const addVideoToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;
});

const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
});

const updatePlaylist = asynchandler(async (req, res) => {
  const { playlistId } = req.params;
  const { name, description } = req.params;
});

export {
  createPlaylist,
  getPlaylistById,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist,
};
