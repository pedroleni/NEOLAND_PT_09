const { upload } = require("../../middleware/file.middleware");
const { registerLargo } = require("../controllers/User.controllers");

const UserRoutes = require("express").Router();

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);

module.exports = UserRoutes;
