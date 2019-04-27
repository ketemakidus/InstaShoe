const db = require("../models");
const jwt = require('express-jwt');

// Defining methods for the shoesController
module.exports = {
  findAll: function(req, res) {
    console.log('finding all...')
    db.shoes
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      // .catch(console.log('yup'));
  },
  findById: function(req, res) {
    db.shoes
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('creating...')
    db.shoes
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.shoes
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
