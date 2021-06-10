import Artist from '../../models/Artist.model';

export const getByNameArtist = async (name: string): Promise<any> => {
  return await Artist.findOne({ name: name });
}
export const increaseTrackCount = async (id: string): Promise<any> => {
  return await Artist.findOneAndUpdate({ _id: id }, { $inc: { trackCount: 1 } });
}
export const addArtist = async (name: string): Promise<any> => {
  const artist = await new Artist({ name: name, trackCount: 1 });
  artist.save();
  return artist.toObject();
}
export const getArtistTrackCountDb = async (name: string): Promise<any> =>{ 
  const artist: any = await Artist.findOne({name:name});
  return artist.trackCount;
  }