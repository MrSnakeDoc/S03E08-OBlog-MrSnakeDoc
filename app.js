const express = require("express");
const ejs = require("ejs");
const config = require("./src/config");
const router = require("./src/router");
const newsArticles = require("./articles.json")
const app = express(express.urlencoded({ extended: true }));

app.locals.newsArticles = newsArticles;
app.use(router);
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.listen(config.port, async () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
