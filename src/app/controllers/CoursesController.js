const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CoursesController {
  show(req, res, next) {
    const slug = req.params.slug;
    Course.findOne({ slug })
      .then((course) =>
        res.render("courses/course", { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://www.youtube.com/watch?v=${formData.videoId}&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=27`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  // [PUT] /courses/update/:slug
  update(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        console.log("mongooseToObject(course)", mongooseToObject(course));
        res.render("courses/update", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
