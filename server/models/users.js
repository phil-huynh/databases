var db = require('../db');

module.exports = {
//send back all the uses
  getAll: function (callback) {
    db.connection.query('select username from users', function(err, res) {
      if (err) {
        console.log('Error');
      } else {
        callback(err, res);
        console.log(res);
      }
    });
  },
  create: function (username, callback) {
    db.connection.query('insert into users(username) values(username)', username, function(err, res) {
      if (err) {
        console.log('Error');
      } else {
        console.log('successful');
        console.log('res', res);
        callback(res);
      }
    });
  }
};
