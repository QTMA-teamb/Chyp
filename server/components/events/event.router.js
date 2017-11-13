const express = require('express');
const router = express.Router();

router.get('/', getAllEvents)

function getAllEvents(req,res){
  const data = [{
    id: 1,
    host:"Anna Stasia",
    name: "Pool Party",
    date: "24/11/17"
  }, {
    id: 2,
    host: "Thomas Burleson",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 3,
    host: "Will Button",
    name: "PD Day",
    date: "21/12/17"
  }, {
    id: 4,
    host: "Ben Clinkinbeard",
    name: "Park",
    date: "15/11/17"
  }, {
    id: 5,
    host: "Kent Dodds",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 6,
    host: "Trevor Ewen",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 7,
    host: "Aaron Frost",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 8,
    host: "Joel Hooks",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 9,
    host: "Jafar Husain",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 10,
    host: "Tim Kindberg",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 11,
    host: "John Lindquist",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 12,
    host: "Joe Maddalone",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 13,
    host: "Tyler McGinnis",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 14,
    host: "Scott Moss",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 15,
    host: "Robert Penner",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 16,
    host: "Keith Peters",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 17,
    host: "Lukas Ruebbelke",
    name: "BBQ",
    date: "15/11/17"
  }, {
    id: 18,
    host: "Brett Shollenberger",
    name: "BBQ",
    date: "15/11/17"
  }];

  res.status(200).send(data);
}



module.exports = router;
