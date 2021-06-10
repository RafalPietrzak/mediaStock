import Source from "../../models/Source.model";
export enum Mode {
  REST = 'REST',
  SOCKET = 'SOCKET',
  GET = 'GET',
}
type Src = {
  url: String;
  mode: Mode;
};
export const replaceSource = async (sourceArray: Src[]): Promise<void> => {
  await Source.remove({});
  await Source.insertMany(sourceArray);
};
export const getSource = async (mode: Mode): Promise<any> => {
  return await Source.find({ mode: mode });
}
export const setLastUpdateTime = async (
  id: String,
  timeStamp: Number
): Promise<void> => {
  await Source.findByIdAndUpdate(id, { $set: { lastUpdate: timeStamp } });
};
