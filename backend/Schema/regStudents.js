const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regSchema = new Schema({
  lrn: String, // String is shorthand for {type: String}
  password: String,
  status: String,
  regDate: Date
});

const pdf = mongoose.model("regStudents", regSchema);