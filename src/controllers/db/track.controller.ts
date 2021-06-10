import Track from '../../models/Track.model';
import { getByNameArtist, addArtist, increaseTrackCount } from './artist.controller';
import { addAlbum, addTrackToList, getByTitleAlbum } from './album.controller';

export const addOrUpdateManyTrack = async (TrackArray: any[]): Promise<any> => {
  return await Promise.allSettled(TrackArray.map(track => {
    return new Promise(async (resolve, reject) => {
      const toUpdateTrack: any = await Track.findOne({ name: track.name, 'album.artist': track.album.artist })
      if (toUpdateTrack) {
        toUpdateTrack.unitPrice = track.unitPrice;
        await toUpdateTrack.save();
      } else {
        const artist = await getByNameArtist(track.album.artist);
        const newTrack: any = new Track(track);
        if (artist) {
          increaseTrackCount(artist._id);
          newTrack.album.artist_id = artist._id;
        } else {
          const newArtist = await addArtist(track.album.artist);
          newTrack.album.artist_id = newArtist._id;
        };
        const album = await getByTitleAlbum(track.album.title);
        if (album) {
          addTrackToList(album._id, newTrack.name, newTrack._id);
          newTrack.album.album_id = album._id;
        } else {
          const newAlbum = await addAlbum(track.album.title, track.album.artist, track.album.artist_id, track.name, track._id);
          newTrack.album.album_id = newAlbum._id;
        }
        newTrack.save();
      }
      resolve('dane');
    })
  }));
};
export const getArtistFromGenreDb = async (genre: string): Promise<any> => {
  const tracks = await Track.find({ genre: genre });
  return tracks.length > 0 ? tracks.map((track: any) => track.album.artist
  ).reduce(
    (previous, current) => previous.includes(current) ? previous
      : [...previous, current], []
  ).sort() : [];
}
