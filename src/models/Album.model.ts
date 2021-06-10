import * as mongoose from "mongoose";

const album = new mongoose.Schema({
  title: String,
  artist: String,
  artist_id: String,
  trackList: []
});
export default mongoose.model("Album", album);
