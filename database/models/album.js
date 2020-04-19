const mongoose = require('mongoose')
const Schema = mongoose.schema

const AlbumSchema = new Schema({
  title: String,
  date: String,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
})

module.exports = AlbumSchema
