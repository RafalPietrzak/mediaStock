import * as mongoose from "mongoose";

const track = new mongoose.Schema({
  name: { type: String, required: true },
  album: {
    title: String,
    artist: String,
    artist_id: String,
    album_id: String,
  },
  mediaType: String,
  genre: String,
  composer: String,
  milliseconds: Number,
  bytes: Number,
  unitPrice: Number,
});
export default mongoose.model("Track", track);
