const express = require("express");
const { isAuth } = require("../../middleware/auth.middleware");
const { createComment } = require("../controllers/Comment.controller");

const CommentRoutes = express.Router();

CommentRoutes.post("/create/:idRecipient", [isAuth], createComment);

module.exports = CommentRoutes;
