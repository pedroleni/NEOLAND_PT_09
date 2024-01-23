//! Requerimos mongoose

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String },
    poster: { type: String },
    year: { type: Number },
    released: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
