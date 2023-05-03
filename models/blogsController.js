const mongoose = require("mongoose");
const { v4: uuidv4 } = require(uuid);

const blogSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  completed: { type: Boolean, require: true },
  dateCreated: { type: Date, default: Date.now(), validation: required },
  dateCompleted: { type: Date },
  status: {
    type: String,
    default: "incomplete",
    validation: required,
    enum: ["incomplete", "complete", "deferred"],
  },
});
