const newsArticles = require("../articles.json");

const routes = {
  root(req, res) {
    res.status(200).render("index", { articleArray: newsArticles });
  },
  selectArticle(req, res) {
    res.status(200).render("article", {
      article: newsArticles.find((obj) => {
        return obj.id === Number(req.params.id);
      }),
    });
  },
  selectCategory(req, res) {
    res.status(200).render("index", {
      articleArray: newsArticles.filter(
        (element) => element.category === req.params.category
      ),
    });
  },
  selectAuthor(req, res) {
    res.status(200).render("index", {
      articleArray: newsArticles.filter(
        (element) =>
          element.author.replace(/[\.\ \'\,\:\-]+/g, "") ===
          decodeURI(req.params.author.replace(/[\.\ \'\,\:\-]+/g, ""))
      ),
    });
  },
};

module.exports = routes;
