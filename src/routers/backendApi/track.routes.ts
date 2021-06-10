import * as express from 'express';
import { updateTracks } from '../../controllers/routers/track.controller';

const trackRouter = express.Router();
trackRouter.route('/update').post(updateTracks);

export default trackRouter;