
var lat=60.217055;
var long=24.945731;
var clicked = false;
var mapOn = false;
var mark ={};
var saveLat = null, saveLng = null;
var myMap;

function getMap() {
    if (mapOn == false){
     myMap = L.map(document.getElementById("mapBox")).setView([lat, long], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
        foo: 'bar',
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,'
    }).addTo(myMap);
    mapOn = true;
    }
    myMap.on('click', testi);
}


function testi(e) {
    if (clicked != true) {
        saveLat = e.latlng.lat;
        saveLng = e.latlng.lng;
        L.popup()
            .setLatLng(e.latlng)
            .setContent('<button onclick ="addMarker()">Lisää parkkipaikka</button>')
            .openOn(myMap);
    }
}

function addMarker(){
    clicked = true;
    console.log(saveLat + ", " + saveLng);
    mark = L.marker([saveLat, saveLng]).addTo(myMap).bindPopup("Valittu paikka").openPopup();
    myMap.setView([saveLat, saveLng]);
    document.getElementById("Latitude").innerText += (" " +saveLat);
    document.getElementById("Longitude").innerText += (" " +saveLng);

}

function removeMarker() {
    myMap.removeLayer(mark);
    saveLat = null;
    saveLng = null;
    clicked = false;
    document.getElementById("Latitude").innerText = ("X-koordinaatti:");
    document.getElementById("Longitude").innerText = ("Y-koordinaatti:");
}