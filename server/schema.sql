-- CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   message_id INT(5)  AUTO_INCREMENT,
--   text_message VARCHAR(200),
--   user INT(5),
--   room_id INT(5),
--   PRIMARY KEY (message_id),
--   FOREIGN KEY (user) REFERENCES users(id),
--   FOREIGN KEY (room_id) REFERENCES rooms(room_id)
-- );

CREATE TABLE users (
  id INT(5) AUTO_INCREMENT,
  username VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE rooms  (
  room_id INT(5) AUTO_INCREMENT,
  roomname VARCHAR(30),
  PRIMARY KEY(room_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT(5)  AUTO_INCREMENT,
  text_message VARCHAR(200),
  user INT(5),
  room_id INT(5),
  PRIMARY KEY (message_id),
  FOREIGN KEY (user) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

