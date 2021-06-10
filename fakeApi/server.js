const express = require('express');
const trackData = require('./trackData.json');
const app = express();
app.get('/source', (req, res) => {
  res.json(getSource());
});
app.get('/api/:id/:time', (req, res) => {
  res.json(getTrack(trackData));
});
app.listen(8001, () => {
  console.log('Server is lessen on 8001 port');
});
function getSource() {
  const sourceNumber = Math.floor(Math.random() * 10 + 5);
  const sourceArray = [];
  for (let i = 0; i < sourceNumber; i++) {
    sourceArray.push({
      url: `http://localhost:8001/api/${Math.floor(Math.random() * 100)}`,
      mode: Math.round(Math.random()) === 0 ? 'GET' : 'API'
    })
  }
  return {sources: sourceArray};
}
function getTrack(trackArray) {
  const trackNumberToAdd = Math.floor(Math.random() * 100);
  const trackToSend = { track: [] };
  for (let i = 0; i < trackNumberToAdd; i++) {
    const track = trackArray.tracks[
      Math.floor(Math.abs(Math.random() * trackArray.tracks.length - 0.1))
    ];
    trackToSend.track.push(track);;
  }
  return trackToSend
};