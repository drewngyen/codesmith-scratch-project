const db = require("../models/database");

function parseRequest(req, res, next) {
  let body = req.body;
  console.log(body);
  res.json(body);
}

// creates a user w/ username, name, notes, interests
function createUser(req, res) {
  let body = req.body;
  console.log("CHECKING THE BODY, PLS SHOW", body);
  let fname = body.firstName;
  let lname = body.lastName;
  let username = body.username;
  let notes = body.notes;
  let interests = body.interests;
  let name = `${fname} ${lname}`;
  let queryStr = `INSERT INTO public.users (username,name,notes,interests)
    VALUES ('${username.toLowerCase()}','${name}', '${notes}', '${interests}')`;
  console.log(`this is the query: ${queryStr}`);
  db.one(queryStr)
    .then(data => {
      console.log("user has been created!");
      res.status(200);
      res.send("yay it worked!!");
    })
    .catch(err => {
      console.log(`something happened.. err: ${err}`);
      res.send(`err msg ${err}`)
    });
    db.one()
}
// TODO: helper func to get user ID
function getUserName() {

};
// TODO: query a user full name
function queryUser(req, res, next) {
  let query = req.params.id;
  console.log(`query: ${query}`);
  let queryStr = `SELECT * FROM "public"."users" WHERE "username" LIKE '%${query}%' OR "name" LIKE '%${query}%'`;
  console.log(queryStr);
  db.one(queryStr)
    .then(data => {
      console.log(`query accepted`);
      console.log(data);
      res.status(200);
      res.locals.userData = data;
      next();
    })
    .catch(err => {
      console.log(`there has been an error: ${err}`);
      res.status(200);
      res.locals.userData = err.result.rows;
      res.json(err.result.rows);
    });
}

// TODO: Send back user data
function sendUser(req, res) {
    let userData = res.locals.userData;
    if (Array.isArray(userData));
    res.json(userData.username);
}
// TODO: Takes gift array
function parseGifts(req, res) {
  let giftArr = req.body.gifts;
  for (el of giftArr) {
    addGift(request, response);
  }
}
// TODO: add gift to user, to use with middleware to handle arrays
function addGift(req, res) {
  let user = req.params.user;
  let body = req.body;
  let u_name = body.u_name;
  let gift = body.gift;
  let queryStr = `INSERT INTO public.gifts (u_name,gift,completed)
    VALUES (${u_name},'${gift}',false)`;
  db.one(queryStr)
    .then(data => {
      console.log(`gift added '${gift}' successfully to ${u_name}`);
      res.send();
    })
    .catch(err => {
      console.log("there has been an error:", err);
      res.send();
    });
}
// TODO: query a users interests
function grabUserInterests(req, res) {}
// TODO: query a users giftlist
function grabUserGiftList(req, res) {}
// Requirements: JSON { "u_id": 1, "gift":"Tent", "checked":"false" }
function updateUserGiftList(req, res) {
  let body = req.body;
  let u_name = body.u_name;
  let gift = body.gift;
  let bool = body.checked;
  let queryStr = `UPDATE gifts SET completed = '${bool}' WHERE gift = '${gift}' AND u_name = ${u_name}`;
  db.one(queryStr)
    .then(data => {
      console.log(`data updated: ${data}`);
      console.log(queryStr);
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      console.log(`error updating db: ${err}`);
      res.status(400);
      res.send(err);
    });
}

// TODO: STRETCH FEATURES
/**
 * clone queried user's giftList to end user's table
 * update the cloned giftlist to avoid modifying the queried user's giftlist
 * allow other user's to view cloned queried giftlist (group feature)
 */

// middleware insert values

// no longer working
function insertTestData(req, res) {
  // QUERY STRINGS MUST BE SINGLE QUOTE!!!
  let queryString = `INSERT INTO events (name, interests, checklist) VALUES ('gil', 'tech, stuff for test', 'cannabis, beer, vodka')`;
  db.one(queryString)
    .then(data => {
      console.log(`response: ${data}`);
    })
    .catch(err => {
      console.log(`unfortunately there's been a error: ${err}`);
    });
}

// middleware test route
function testRoute(req, res) {
  let obj = {
    hello: "world"
  };
  res.json(obj);
}

module.exports = {
  testRoute,
  insertTestData,
  parseRequest,
  createUser,
  queryUser,
  addGift,
  sendUser
};
