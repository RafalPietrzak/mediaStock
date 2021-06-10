import * as express from 'express';
import { getArtistTrackCount, getArtistFromGenre } from '../../controllers/routers/artist.controller';

const artistRouter = express.Router();
artistRouter.route('/count-tracks/:name').get(getArtistTrackCount);
artistRouter.route('/genre/:genre').get(getArtistFromGenre);

export default artistRouter;