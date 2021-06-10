import * as mongoose from "mongoose";

const artist = new mongoose.Schema({
  name: String,
  trackCount: Number,
});
export default mongoose.model("artist", artist);
