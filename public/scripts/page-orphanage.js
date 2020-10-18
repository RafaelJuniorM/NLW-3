const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// create  map
const map = L.map('mapid', options).setView([-19.9240083,-43.9410837], 15) 
// L. = object pelo fato de possuir um ponto   
// map() = função com um argunmento
// setView = funçao contendo dois argumentos 

// create and add tilelayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg", // localizaçao do icone
  iconSize: [58, 68], // tamanho 
  iconAnchor: [28, 68], // onde ele estara ancorado
  popupAnchor: [170, 2] 
})
 
// create and add marker
L
.marker([-19.9240083,-43.9410837], {icon})
.addTo(map)

