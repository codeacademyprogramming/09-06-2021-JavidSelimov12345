import mongoose from 'mongoose'
const { Schema } = mongoose

const playlistSchema = new Schema({
  name: {
    type: String
  },
  creation_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  author: { type: String },
  songs: { type: [] }
})

export default mongoose.model('Playlist', playlistSchema)
