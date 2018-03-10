var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
// Using the Schema constructor, create a new NoteSchema object
var NoteSchema = new Schema({
  // `title` is of type String
  title: {
  	type: String,
  },
  // `body` is of type String
  body: {
  	type: String
  },
  created: {
  	type: Date,
  	default: Date.now
  }
});
// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);
// Export the Note model
module.exports = Note;