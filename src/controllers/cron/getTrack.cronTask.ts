import axios from 'axios';
import { getSource, Mode } from '../db/source.controller';
import mapChunkPromise from '../../utils/mapChunkPromise';
import {addOrUpdateManyTrack} from '../../controllers/db/track.controller'; 

const getTracks = {
  time: process.env.UPDATE_TRACK_SCHEDULE,
  fn: async (url: string): Promise<void> => {
    const sources = await getSource(Mode.GET);
    mapChunkPromise(
      parseInt(process.env.UPDATE_TRACK_CHUNK), UpdateTrackBase
    )(sources.map(
      ({ _id, url, lastUpdate = 0 }) => [_id, url, lastUpdate]
    ));
  },
};
function UpdateTrackBase(_id: string, url: string, lastUpdate: number) {
  return new Promise(async (resolve, reject) => {
    const result : any = await axios.get(`${url}/${lastUpdate}`)
      .catch(err => console.log('Collect track was unsuccess'));
    addOrUpdateManyTrack(result.data.track);
  })
}

export default getTracks;
