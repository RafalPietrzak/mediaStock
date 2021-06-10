import * as mongoose from 'mongoose';

mongoose.connect(
  'mongodb://localhost:27017/mediaTrackStore', 
  {useNewUrlParser: true, useUnifiedTopology: true}
);
const db = mongoose.connection;
db.once('open', ()=>{
  console.log('Connected to dataBase');
});
db.on('error', (e)=>{
  console.log('ERROR', e);
});