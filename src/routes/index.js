const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const meRouter = require("./me");
function routes(app) {
  app.use("/me", meRouter);
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = routes;
