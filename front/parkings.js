function funk() {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8081/spots";
    xmlhttp.onreadystatechange = function() {
        console.log(xmlhttp.status)
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(url)
            var myArr = JSON.parse(xmlhttp.responseText);
            locationFunction(myArr);
        }
    }
    xmlhttp.withCredentials = false;
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('accept', 'application/json, text/plain, */*');
    xmlhttp.send();
}

function locationFunction(result) {
    for (var i = 0; i < result.length; i++){
        var savedLat = result[i].Latitude;
        var savedLng = result[i].Longitude;
        L.marker([savedLat, savedLng]).addTo(myMap).bindPopup(result[i].Address + "<br>" + result[i].Hours + "<br>" + result[i].Restricted_Days);
    }
}