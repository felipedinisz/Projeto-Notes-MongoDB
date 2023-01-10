const db = require("../../../db/connection");
const ObjectId = require('mongodb').ObjectId;

exports.home = (req, res) => {
  (async() => {

    const notes = await db.getDb().db().collection('notes').find({}).toArray()

    // console.log(notes)

    res.render('home', {notes});

  })()
    .catch(err => console.log(err))
}
