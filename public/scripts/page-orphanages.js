// create  map
const map = L.map('mapid').setView([-19.9240083,-43.9410837], 15) 
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
  popupAnchor: [88, 0] 
})

// create popup overlay 
const popup = L.popup({
  closeButton: false,
  ClassName: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg> </a>')
 

// create and add marker
L
.marker([-19.9240083,-43.9410837], {icon})
.addTo(map)
.bindPopup('popup');
