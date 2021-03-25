const dbConfig = require("../config/db.config");


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db ={};
db.mongoose = mongoose;

db.products = require("./product")(mongoose);
db.orders = require("./order")(mongoose);
module.exports = db;