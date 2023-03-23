const express = require("express");
const { TestModel } = require("../models/Test.model");
const { noteData } = require("../controllers/Note.controller");

const multer = require("multer");
const testsRouter = express.Router();

// G E T
testsRouter.get("/", async (req, res) => {
  try {
    const tests = await TestModel.find();
    res.send(tests);
  } catch (err) {
    console.log(err);
  }
});

//S I N G L E   T E S T
testsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const test = await TestModel.findOne({ _id: id });
    console.log(test);
    res.send(test);
  } catch (err) {
    console.log(err);
  }
});
// P O S T
testsRouter.post("/create", async (req, res) => {
  const payload = req.body;

  try {
    const new_Test = new TestModel(payload);
    await new_Test.save();
    res.send({ msg: "Testroom Created" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something Went Wrong" });
  }
});

// P A T C H
testsRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  const test = await TestModel.find({ _id: id });
  const userID_in_test = test[0].userID;
  const userID_making_req = req.body.userID;

  try {
    if (userID_making_req !== userID_in_test) {
      res.send({ msg: "You Are Not Authorised" });
    } else {
      await NoteModel.findByIdAndUpdate({ _id: id }, payload);
      res.send("updated the Test");
    }
  } catch (err) {
    res.send({ msg: "Something Went Wrong" });
  }
});

//add note
testsRouter.patch("/:id/addnote", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    const note = await TestModel.findById(id);
    console.log("note is =>", note);
    if (note) {
      await note.updateOne({ $push: { notes: data } });
      let findAllNotes = await TestModel.findOne({ _id: id });
      res.send({ msg: "added note" });
      console.log("note-added");
    } else {
      res.send("Test Not Found");
    }
  } catch (err) {
    res.send(err);
  }
});

//D E L E T E
testsRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await TestModel.findByIdAndDelete({ _id: id });
    res.send("Deleted the Test");
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something Went Wrong" });
  }
});

module.exports = {
  testsRouter,
};
