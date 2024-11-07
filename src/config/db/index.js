const mongoose = require("mongoose");
async function connect() {
  const uri = "mongodb://localhost:27017/f8_education_dev";
  try {
    await mongoose.connect(uri);
    console.log("connect successfully!");
  } catch (error) {
    console.log("fail");
  }
}

module.exports = { connect };
