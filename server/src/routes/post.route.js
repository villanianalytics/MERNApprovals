const express = require("express");
const router = express.Router();
//impot postController
const postController = require("../controllers/post.controller");
const auth = require("../middleware/auth.middleware");
//import middleware
const awaitHandlerFactory = require("../middleware/awaitHandlerFactory.middleware");
//import validation for express-validater

// POST ==> post/getall
router.post("/getall", awaitHandlerFactory(postController.getAllPost));

// POST ==> post/add
router.post("/add", awaitHandlerFactory(postController.addPost));

// POST ==> post/update/copyrighter
router.post(
  "/update/copyrighter",
  awaitHandlerFactory(postController.updatePostByCopyrigher)
);

// POST ==> post/update/customer
router.post(
  "/update/customer",
  awaitHandlerFactory(postController.updatePostByCustomer)
);

// POST ==> post/update/publish
router.post(
  "/update/publish",
  awaitHandlerFactory(postController.updatePostByTeammember)
);

/***********************************Export*******************************************/
module.exports = router;
