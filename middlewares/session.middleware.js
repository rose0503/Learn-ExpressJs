const shortid = require("shortid");
const db = require("../db");

let sessionId = shortid.generate();
module.exports.session = (req, res, next) => {
  if (req.signedCookies.sessionId === undefined) {
    res.cookie("sessionId", sessionId, { signed: true });
  }
  db.get("sessions").push({ id: sessionId, cart: {}}).write();
  console.log("sessionId" , sessionId)
  next();
};
