const router = require("express").Router();

const userRoutes = require("./userApi");
const postRoutes = require("./post-route");
const commentRoutes = require("./comment-route");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
