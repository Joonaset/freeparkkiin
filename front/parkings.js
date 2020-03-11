function locationFunction(result) {
    for (var i = 0; i < result.length; i++){
        var savedLat = result[i].Latitude;
        var savedLng = result[i].Longitude;
        L.marker([savedLat, savedLng]).addTo(myMap).bindPopup(result[i].Address + "<br> Parkki aika: " + result[i].Hours + "<br>" + result[i].Restricted_Days);
    }
}