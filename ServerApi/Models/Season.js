const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    titleSeason: String,
    episodes: 
  [    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Episodes",
      },]
    
  });

  const Seasons = mongoose.model('Seasons', SeasonSchema)
  module.exports = Seasons