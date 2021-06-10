import { addOrUpdateManyTrack } from '../db/track.controller';

export const updateTracks = async (req, res) => {
  try {
    const track = await addOrUpdateManyTrack(req.body.track);
    if (track.length === 0) res.status(404).json({ message: 'Track wasn\'t updated' });
    else res.json({ message: 'Tracks was added/updated' });
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};