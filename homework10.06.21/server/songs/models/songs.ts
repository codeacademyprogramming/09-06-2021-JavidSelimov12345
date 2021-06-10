import mongoose from 'mongoose'
const { Schema } = mongoose

const songSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  upload_date: {
    type: Date,
    required: false,
    default: Date.now
  },
  media_url: {
    type: String,
    required: true
  }
})

export default mongoose.model('Songs', songSchema)
