import * as mongoose from "mongoose";

const shortTrack = new mongoose.Schema({
  track_id: String,
  name: String,
});
const playList = new mongoose.Schema({
  name: String,
  track: [shortTrack],
});
export default mongoose.model("PlayList", playList);
