var models = require('../models');
var express = require('express');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json(data);
      }
    });
    // models.messages.getAll((data) => {
    //   console.log('should send the data');
    //   res.send (data);
    //   res.end('message get request');
    //
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body.message, req.body.username, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
