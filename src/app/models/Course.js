const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Course = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  videoId: { type: String },
  level: { type: String, require: true },
  slug: { type: String, slug: "name" },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
