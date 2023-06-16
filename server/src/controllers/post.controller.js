const HttpException = require("../utils/HttpException.utils");
const PostModel = require("../models/post.model");

/*********************************Post Controller*********************************************/

const getAllPost = async (req, res, next) => {
  const result = await PostModel.getList();
  if (!result.state) {
    throw new HttpException(200, "There is no posts.");
  }

  res.send({
    type: "success",
    message: "successfull",
    posts: result.posts,
  });
};

const addPost = async (req, res, next) => {
  try {
    const result = await PostModel.addPost({
      title: req.body.title,
      company: req.body.company,
      client: req.body.client,
    });

    if (!result) {
      throw new HttpException(400, "The update has been failed.");
    }

    res.send({
      type: "success",
      message: "successfull",
    });
  } catch (e) {
    throw new HttpException(400, "The update has been failed.");
  }
};

const updatePostByCopyrigher = async (req, res, next) => {
  try {
    const result = await PostModel.updatePostByCopyrigher({
      id: req.body.id,
      title: req.body.title,
      post: req.body.post,
      hashtags: req.body.hashtags,
      comments: req.body.comments,
      notes: req.body.notes,
      mode: req.body.mode,
    });

    if (!result) {
      throw new HttpException(400, "The update has been failed.");
    }

    res.send({
      type: "success",
      message: "successfull",
    });
  } catch (e) {
    throw new HttpException(400, "The update has been failed.");
  }
};

const updatePostByCustomer = async (req, res, next) => {
  const result = await PostModel.updatePostByCustomer({
    id: req.body.id,
    title: req.body.title,
    post: req.body.post,
    hashtags: req.body.hashtags,
    comments: req.body.comments,
    notes: req.body.notes,
    schedule: req.body.schedule,
    mode: req.body.mode,
  });

  if (!result) {
    throw new HttpException(400, "The update has been failed.");
  }

  res.send({
    type: "success",
    message: "successfull",
  });
};

const updatePostByTeammember = async (req, res, next) => {
  const result = await PostModel.updatePostByTeammember({
    id: req.body.id,
    title: req.body.title,
    post: req.body.post,
    hashtags: req.body.hashtags,
    comments: req.body.comments,
    notes: req.body.notes,
    mode: req.body.mode,
  });

  if (!result) {
    throw new HttpException(400, "The update has been failed.");
  }

  res.send({
    type: "success",
    message: "successfull",
  });
};

/***********************************Export*******************************************/
module.exports = {
  getAllPost,
  addPost,
  updatePostByCopyrigher,
  updatePostByCustomer,
  updatePostByTeammember,
};
