const TestModel = require("../models/Test.model");

const noteData = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    const note = await TestModel.findById(id);
    console.log("note is =>", note);
    if (note) {
      await note.updateOne({ $push: { notes: data } });
      let findAllNotes = await TestModel.findOne({ _id: id });
      res.send("added note");
      console.log("note-added");
    } else {
      res.send("Test Not Found");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  noteData,
};
