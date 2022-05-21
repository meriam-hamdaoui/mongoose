//require mongoose
const mongoose = require("mongoose");

//create a peron schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a name is required here"],
  },
  age: {
    type: Number,
    required: [true, "an age is required here"],
  },
  favouriteFoods: [String],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Person = mongoose.model("person", personSchema);
