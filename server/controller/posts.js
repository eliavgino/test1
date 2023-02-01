const { Post } = require("../model/Post");

//get all post
exports.getPost = async (req, res) => {
  try {
    const result = await HairCut.find();
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err);
  }
};
/////////////////////////////////////////////////
//get post by user id
exports.getPostByUser = async (req, res) => {
  try {
    const id = req.body.userId;
    const result = await Post.find({ userId: id });
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
//add new post
exports.addPost = async (req, res) => {
  let body = req.body;
  try {
    //create the post
    let post = await Post.create(body);

    //save the post and send

    res.status(201).send(post);
  } catch (err) {
    console.log(err);
    res.status(403).send(err.message);
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////
