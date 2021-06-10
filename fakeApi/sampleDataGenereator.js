const fs = require('fs');
const trackData = () => {
  const genreArray = [
    'Pop',
    'Dance',
    'Hip-hop',
    'Rap',
    'R&B',
    'Latin',
    'Rock',
    'Metal',
    'Country',
    'Folk',
    'Classical',
    'Jazz',
    'Blues',
    'Easy Listening',
    'New Age'
  ]
  const data = [];
  for (let artist = 0; artist < 100; artist++) {
    const genre = genreArray[Math.floor(Math.random() * 15 - 0.1)];
    for (let album = 0; album < 20; album++) {
      for (let track = 0; track < 20; track++) {
        data.push({
          name: `Track${track} album${album} artist${artist}`,
          album: {
            title: `album${album} artist${artist}`,
            artist: `artist${artist}`
          },
          mediaType: 'mp3',
          genre: genre,
          composer: Math.floor(Math.random() * 100),
          milliseconds: Math.floor(Math.random() * 10000 + 1000000),
          bytes: Math.floor(Math.random() * 10000 + 1000000),
          unitPrice: Math.floor(Math.random() * 500 + 100),
        })
      }
    }
  }
  return data;
}
fs.writeFile('./trackData.json', JSON.stringify(
  { tracks: trackData() }
),
  () => { console.log('Data was generated'); }
);
