const Post = require('../models/Post');

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts).status(200);
  } catch (error) {
    res.status(404);
    console.error(error);
  }
};

exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    const save = await newPost.save();
    res.json(save).status(201);
  } catch (error) {
    res.status(409);
    console.error(error);
  }
};

exports.getSpecific = async (req, res) => {
  const id = req.params.id;
  try {
    const posts = await Post.findById(id);
    res.json(posts).status(201);
  } catch (error) {
    res.status(404);
    console.error(error);
  }
};

exports.deleteSpecific = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const posts = await Post.deleteOne({ _id: id });
    res.json(posts).status(201);
  } catch (error) {
    res.status(409);
    console.error(error);
  }
};

exports.updateSpecific = async (req, res) => {
  const id = req.params.id;
  const post = req.body;

  try {
    const posts = await Post.updateOne({ _id: id }, post);
    res.status(201).json(posts);
  } catch (error) {
    res.status(409);
    console.error(error);
  }
};
