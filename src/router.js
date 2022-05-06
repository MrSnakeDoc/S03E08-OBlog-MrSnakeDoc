const express = require("express");
const router = express.Router();
const routes = require("./middlewares");
module.exports = router;
router.use(express.static("./src/public"));

// router.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()} ${req.ip}] ${req.originalUrl}`);
//   next();
// });
router.get("/", routes.root);

router.get("/article/:id", routes.selectArticle);

router.get("/category/:category", routes.selectCategory);

router.get("/author/:author", routes.selectAuthor);
