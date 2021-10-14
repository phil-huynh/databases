var models = require('../models');
var express = require('express');

module.exports = {
  get: function (req, res) {
    models.users.getAll((data) => {
      res.send(data);
    });
   // res.send('testing user');
  },
  post: function (req, res) {
    console.log(req.body);
    models.users.create(req.body, (data) => {
      console.log(data);
      res.send(data);
    });
  }
};
