import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default mongoose.model('Feed', new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  road_id: String,
  contents: String,
  walk_langth: Number,
  walk_time: Number,
  walk_count: Number,
  is_ok: Number,
  crt_dt: {
    type: Date,
    default: Date.now
  },
  udt_dt: {
    type: Date,
    default: Date.now
  }
}, { autoIndex: true }))