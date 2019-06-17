const pgp = require("pg-promise")();

const uri =
  "postgres://ufrumaho:GoA4EDvj51NUOOC5TkCwgKczox8Uv-wS@raja.db.elephantsql.com:5432/ufrumaho";

var db = pgp(uri);

db.one("SELECT $1 AS value", 123)
  .then(function(data) {
    console.log("DATA:", data.value);
  })
  .catch(function(error) {
    console.log("ERROR:", error);
  });

module.exports = db;
/*
CREATE TABLE users (
  _id serial PRIMARY KEY,
  username VARCHAR(80) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  notes TEXT,
  interests TEXT,
);

// TABLE NAME AND KEYS MUST BE IN DOUBLE QUOTE
// check CANNOT be used as key name
CREATE TABLE gifts (
	_id serial PRIMARY KEY,
  u_name VARCHAR(80) REFERENCES users(username) NOT NULL,
  gift varchar(255) NOT NULL,
  completed BOOLEAN NOT NULL
  );
  u_id INTEGER REFERENCES users(_id),

// TABLE NAME AND KEYS MUST BE IN DOUBLE QUOTE
CREATE TABLE interests (
	_id serial PRIMARY KEY,
	u_id INTEGER REFERENCES users(_id),
  interest varchar(255) NOT NULL
);

// TABLE NAME AND KEYS MUST BE IN DOUBLE QUOTE
CREATE TABLE notes (
	_id serial PRIMARY KEY,
	u_id INTEGER REFERENCES users(_id),
  note TEXT NOT NULL
);





*/
