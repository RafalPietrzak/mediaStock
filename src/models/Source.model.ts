import * as mongoose from "mongoose";

const source = new mongoose.Schema({
  url: String,
  mode: String,
  lastUpdate: Number,
});
export default mongoose.model("Source", source);
