const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  // [GET] /me/courses
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  show(req, res) {
    res.render("detail");
  }
}

module.exports = new MeController();
