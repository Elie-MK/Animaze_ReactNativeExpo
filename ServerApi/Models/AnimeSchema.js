const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
  titleAnime: String,
  img: String,
  desc: String,
  stars: Number,
  year: String,
  seasons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seasons",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Animes = mongoose.model("Animes", AnimeSchema);
module.exports = Animes;
