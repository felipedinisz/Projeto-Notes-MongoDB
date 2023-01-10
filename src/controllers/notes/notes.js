const db = require("../../../db/connection");
const ObjectId = require("mongodb").ObjectId;

exports.getnotes = (req, res) => {
  res.render("notes");
};

exports.details = (req, res) => {
  (async () => {
    const id = new ObjectId(req.params.id);

    const note = await db.getDb().db().collection("notes").findOne({ _id: id });

    console.log(note);

    res.render("detail", { note });
  })().catch((err) => console.log(err));
};

exports.editnote = (req, res) => {
  (async () => {
    const id = new ObjectId(req.params.id);

    const note = await db.getDb().db().collection("notes").findOne({ _id: id });

    console.log(note);

    res.render("edit", { note });
  })().catch((err) => console.log(err));
};

exports.postnotes = (req, res) => {
  const data = req.body;
  const title = data.title;
  const description = data.description;

  db.getDb()
    .db()
    .collection("notes")
    .insertOne({ title: title, description: description });

  res.redirect(301, "/");
};

exports.delete = function (req, res) {
  const data = req.body;
  const id = new ObjectId(data.id);

  db.getDb().db().collection("notes").deleteOne({ _id: id });

  res.redirect(301, "/");
};

exports.updatenotes = function (req, res) {
  const data = req.body;
  const id = new ObjectId(data.id);
  const title = data.title;
  const description = data.description;

  db.getDb()
    .db()
    .collection("notes")
    .updateOne(
      { _id: id },
      { $set: { title: title, description: description } }
    );

  res.redirect(301, "/");
};
