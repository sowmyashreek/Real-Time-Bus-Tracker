// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.022362,42.366978],
  [-71.021576,42.364797],
  [-71.055737, 42.350590],
  [-71.102772, 42.365178]
  
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic293bXlhc2hyZWVrIiwiYSI6ImNrdnVpbHRpNzB4aGoyb3Fmb3dkOXRpcTIifQ.1BhK7oicTHs3YQzj_NILmQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.022362,42.366978],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
.setLngLat([-71.022362,42.366978])
.addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  setTimeout(() => {
    if (counter >= busStops.length)return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000);


  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
