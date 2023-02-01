const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { getPost, getPostByUser, addPost } = require("../controller/posts");

router.route("/").get(getPost).post(addPost);
router.route("/getPostByUser").post(getPostByUser);
module.exports = router;
