const express = require('express');
const {
  getPost,
  createPost,
  getSpecific,
  deleteSpecific,
  updateSpecific,
} = require('../controllers/post');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', getPost);

router.post('/', createPost);

router.get('/:id', getSpecific);

router.delete('/:id', deleteSpecific);

router.patch('/:id', updateSpecific);

module.exports = router;
