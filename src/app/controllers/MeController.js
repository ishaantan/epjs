const Course = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
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

  // [GET] me/course/:id/edit
  show(req, res, next) {
    const id = req.params.id;
    Course.findById(id)
      .then((course) =>
        res.render("me/update", { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  // [PUT] me/course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/courses"))
      .catch(next);
  }

  // [DELETE] me/course/:id
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new MeController();
