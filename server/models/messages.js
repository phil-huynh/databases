var db = require('../db');

module.exports = {
  getAll: function () {
  //message, username, roomname
    db.query('select a.text_message, b.username, c.roomname from messages a left join users b on a.user=b.id left join rooms c on a.room_id = c.room_id;', function(err, res) {
      if (err) {
        console.log('error');
        throw new Error('error');
      } else {
        console.log(result);
      }
    });
  }, // a function which produces all the messages
  create: function (username, message, roomname) {
    var userQuery = `insert into users(username) values(${username})`;
    db.query(userQuery, function(err) {
      if (err) {
        console.log('error');
        throw new Error('error');
      } else {
        console.log ('Inserted');
      }
    });
    //insert values into username
    //insert values into roomname
    var roomQuery = `insert into rooms(roomname) values(${roomname})`;
    db.query(roomQuery, function(err) {
      if (err) {
        console.log('error');
        throw new Error('error');
      } else {
        console.log ('Inserted');
      }
    });
    //get user_id, room_id


    //insert values inot messages
  } // a function which can be used to insert a message into the database
};
