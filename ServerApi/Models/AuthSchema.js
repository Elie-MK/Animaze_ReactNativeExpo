const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authSchema = new Schema({
  username: {
    type: String,
    required:true,
    unique: true
  },
  email: {
    type: String,
    required:true,
    unique: true
  },
  password: {
    type: String,
    required:true,
  },
  token: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
});
const authUsers = mongoose.model("Users", authSchema);

module.exports = authUsers;
