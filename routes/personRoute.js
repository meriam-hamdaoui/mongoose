//require express & router
const express = require("express");
const router = express.Router();

//require a local model
const errorMsg = require("../controllers/errorMsg");

//import the person prototype model
const Person = require("../models/personProtoType");

//@api http://localhost:5000/api/people
//@description add new person
//access public
router.post("/", (req, res) => {
  const newPerson = new Person({ ...req.body });
  newPerson
    .save()
    .then((person) => res.status(200).json(person))
    .catch((err) => res.status(400).json(err));
});

//create and save a record of a model
const firstPerson = new Person({
  name: "Leanne Graham",
  age: 30,
  favouriteFoods: ["grapes", "cake", "burritos"],
});
//i had to comment the save line to evoid the repetition
//firstPerson.save((err) => errorMsg(err, firstPerson));

//create many records
const otherPeople = [
  {
    name: "Ervin Howell",
    age: 45,
    favouriteFoods: ["rasin", "humberger", "chocolate"],
  },
  {
    name: "Clementine Bauch",
    age: 18,
    favouriteFoods: ["couscous", "cheese-cake", "ice-cream"],
  },
  {
    name: "Patricia Lebsack",
    age: 60,
    favouriteFoods: ["pasta", "choclate-cake", "pupcorn"],
  },
];
Person.create(otherPeople);
// console.log(otherPeople);

//@api http://localhost:5000/api/people
//@description display all the people list
//get
router.get("/", (req, res) => {
  Person.find()
    .then((people) => res.status(200).json(people))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
