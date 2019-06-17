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
  let gifts = body.gifts;
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
        res.send(`err msg ${err}`);
    });

  // logic to add gifts
  if (Array.isArray(gifts)) {
    for (el of gifts) {
      let gift = Object.keys(el)[0];
      let queryStrAddGift = `INSERT INTO public.gifts (u_name,gift,completed)
            VALUES ('${username}','${gift}',false)`;
      db.one(queryStrAddGift)
        .then(data => {
          console.log(`gift: ${el} entered`);
          console.log(data);
          //   res.sendStatus(200);
        })
        .catch(err => {
          console.log(`error: ${err}`);
          //   res.send(err);
        });
    }
    res.sendStatus(200);
  }
}

// TODO: query a user full name
// TODO: ADD GIFTS
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
      res.json([data]);
    })
    .catch(err => {
        // TODO: ACTUALLY handle a error request instead of sending back rows, maybe use axios?
      console.log(`there has been an error: ${err}`);
      res.status(200);
      res.locals.userData = err.result.rows;
      res.json(err.result.rows);
    });
}

// TODO: Send back user data including notes, interests (Table users), send Table Gifts data
// cannot parse array atm, must be single object ex/ { "id":2, "username":"gildagil" }
function sendUserGifts(req, res) {
  let username = req.params.id;
  console.log(username);
  let queryStr = `SELECT u_name,gift,completed FROM gifts WHERE u_name = '${username}';`
    db.one(queryStr).then(data => {
        console.log(`giftlist query accepted!`);
        console.log(data);
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(200);
        console.log(`there has been an error retriving giftlist: ${err}`);
        res.json(err.result.rows);
    })
}

// TODO: add gift to user, to use with middleware to handle arrays
function addGift(req, res) {
  let user = req.params.id;
  let body = req.body;
  let gift = body.gift;
  let queryStr = `INSERT INTO public.gifts (u_name,gift,completed)
    VALUES ('${user}','${gift}',false)`;
  db.one(queryStr)
    .then(data => {
      console.log(`gift added '${gift}' successfully to ${user}`);
      res.send();
    })
    .catch(err => {
      console.log("there has been an error:", err);
      res.send();
    });
}
// Requirements: JSON { "u_id": 1, "gift":"Tent", "completed":"false" }
function updateUserGiftList(req, res) {
    let u_name = req.params.id;
    let body = req.body;
    let gift = body.gift;
    let bool = body.completed;
    let queryStr = `UPDATE gifts SET completed = '${bool}' WHERE gift = '${gift}' AND u_name = '${u_name}'`;
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
 // TODO: query a users interests
 function grabUserInterests(req, res) {}
 // TODO: query a users giftlist
 function grabUserGiftList(req, res) {}
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
  sendUserGifts,
  updateUserGiftList
};
