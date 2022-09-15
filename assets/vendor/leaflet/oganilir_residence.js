var map = L.map('map').setView([-3.43186, 104.62727], 13);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-3.43186, 104.62727]).addTo(map)
  .bindPopup('<b>Kabupaten</b><br />Ogan Ilir.').openPopup();

// var circle = L.circle([-3.556695, 104.437781], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(map).bindPopup('I am a circle.');

var polygon = L.polygon([
    [104.437781, -3.556695],
    [104.414436, -3.562177]
    // [-3.584107, 104.403449],
    // [-3.621113, 104.319678]
]).addTo(map).bindPopup('I am a polygon.');


var popup = L.popup()
  .setLatLng([-3.43186, 104.62727])
  .setContent('Kabupaten Ogan Ilir')
  .openOn(map);

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);