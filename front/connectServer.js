
var url = "http://localhost:8081/spots";

function connectServer() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            locationFunction(myArr);
        }
    }
    xmlhttp.withCredentials = false;
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('accept', 'application/json, text/plain, */*');
    xmlhttp.send();
}

function addNewPark(info) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(info));
    reloadMarker(info);

}

function sendPut(id){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("PUT", "http://localhost:8081/spots/?id=" + id, true);
    console.log("http://localhost:8081/spots/?=" + id)
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send();
    connectServer();
}