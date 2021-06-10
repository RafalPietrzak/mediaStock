import "./controllers/cron/cron";
import "./db";
import * as express from 'express';
import artistRoutes from './routers/frontendApi/artist.routes';
import trackRoutes from './routers/backendApi/track.routes';
import { checkIsAllowed } from './controllers/routers/source.controller';
const app = express();
app.use('/frontend-api/artist', artistRoutes);
app.use('/backend-api/track', express.json(), checkIsAllowed, trackRoutes);
app.listen(process.env.PORT, (): void => {
  console.log("Server is lessen on " + process.env.PORT + " port");
});
