import { getArtistTrackCountDb } from '../db/artist.controller';
import { getArtistFromGenreDb } from '../db/track.controller';
export const getArtistTrackCount = async (req, res) => {
  try {
    const trackCount = await getArtistTrackCountDb(req.params.name);
    if (!trackCount) res.status(404).json({ message: 'Not found' });
    else res.json(trackCount);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
export const getArtistFromGenre = async (req, res) => {
  try {
    const artist = await getArtistFromGenreDb(req.params.genre);
    if (artist.length === 0) res.status(404).json({ message: 'Not found' });
    else res.json(artist);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};