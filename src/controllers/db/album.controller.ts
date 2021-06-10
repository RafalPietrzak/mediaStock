import Album from '../../models/Album.model';

export const getByTitleAlbum = async (title: string): Promise<any> => {
  return await Album.findOne({ title: title });
}
export const addTrackToList = async (id: string, trackName: string, track_id: string): Promise<any> => {
  return await Album.findOneAndUpdate({ _id: id }, {
    $push: { trackList: { name: trackName, id: track_id } }
  });
}
export const addAlbum = async (title, artist, artist_id, name, track_id): Promise<any> => {
  const album = await new Album({ title: title, artist: artist, artist_id: artist_id, trackList:[{name:name, track_id: track_id}] });
  album.save();
  return album.toObject();
}
