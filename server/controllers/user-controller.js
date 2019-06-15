const db = require("../models/database");


function parseRequest(req, res, next) {
    let body = req.body;
    console.log(body);
    res.json(body);
}

// creates a user w/ username, name
function createUser(req, res) {
    let body = req.body;
    console.log(body);
    let username = body.username;
    let name = body.name;
    let queryStr = `INSERT INTO public.users (username,name)
    VALUES ('${username}','${name}')`;
    console.log(`this is the query: ${queryStr}`);
    db.one(queryStr).then(data => {
        console.log('user has been created!');
        res.send('yay it worked!!');
    }).catch(err => {
        console.log(`something happened.. err: ${err}`);
    });
};
// TODO: query a user full name
function queryUser(req, res) {
    req.body.name = "Drew";
    SELECT "DREW" FROM "public"."user" WHERE user.name
};
// TODO: query a users interests
function grabUserInterests(req, res) {};
// TODO: query a users giftlist
function grabUserGiftList(req, res) {};
// TODO: update a users 
function updateUserGiftList(req, res) {};

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
    db.one(queryString).then(data => {
        console.log(`response: ${data}`);
    }).catch(err => {
        console.log(`unfortunately there's been a error: ${err}`);
    })
}



// middleware test route
function testRoute(req, res) {
    let obj = {
        "hello": "world"
    }
    res.json(obj);
}

module.exports = { testRoute, insertTestData, parseRequest, createUser };
