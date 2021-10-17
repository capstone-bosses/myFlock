import geohash from 'ngeohash';

const latitude = -37.4689556;
const longitude = -72.352495;
const hash = geohash.encode(latitude, longitude);

console.log(hash);
