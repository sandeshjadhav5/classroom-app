const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: String,
  section: String,
  subject: String,
  room: Number,
  notes: { type: Array, default: [] },
  userID: String,
});

const TestModel = mongoose.model("test", testSchema);

module.exports = {
  TestModel,
};
