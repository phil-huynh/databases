var db = require('../db');


module.exports = {
  getAll: function (callback) {
    var sqlQuery = 'select messages.message_id, messages.text_message, users.username from messages left outer join users on (messages.user = users.id)'

    db.connection.query(sqlQuery, function(err, res) {
      if (err) {
        console.log('error');
      } else {
        callback(res);
        console.log(res);
      }
    });


  }, // a function which produces all the messages
  create: function (message, user, callback) {

    db.connection.query('insert into messages(text_message,user) value (?, (select id from users where username = ? limit 1)', message, user, function(err, data) {
      if (err) {
        console.log('error');
      } else {
        callback(data);
        console.log('succesful');
      }
    });


    //insert values inot messages
  } // a function which can be used to insert a message into the database
};

