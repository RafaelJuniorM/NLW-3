// create  map
const map = L.map('mapid').setView([-19.9240083,-43.9410837], 16)

// create and add tilelayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon


// create and add marker
L
.marker([-19.9240083,-43.9410837]).addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();