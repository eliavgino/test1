const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,

    required: true,
  },
});

const Post = new mongoose.model("Post", PostSchema);

module.exports = { Post };
