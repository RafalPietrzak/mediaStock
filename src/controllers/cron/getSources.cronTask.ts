import axios from 'axios';
import { replaceSource } from '../db/source.controller';
import fnIf from '../../utils/fnIf';

const getSources = {
  time: process.env.UPDATE_SOURCE_SCHEDULE,
  fn: async (url: string): Promise<void> => {
    const result = await axios.get(process.env.UPDATE_SOURCE_URL);
    fnIf(() => replaceSource(result.data.sources))(result.data.sources.length > 0);
  },
};

export default getSources;
