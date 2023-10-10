console.log("hello");
function phoneRecord() {
    var phoneinput = document.getElementById("lphone").value;
    var toReturn;
    for (var i = 0; i < phoneinput.length; i++) {
        var letter = phoneinput[i];
        if (isNaN(letter)) {
            toReturn = phoneinput.slice(0, -1);
            document.getElementById("lphone").value = toReturn;
        }
    }
}
function emailValidCheck() {
    var emailinput = document.getElementById("email").value;
    var toReturn;
    var foundat = false;
    var founddot = false;
    for (var i = 0; i < emailinput.length; i++) {
        var letter = emailinput[i];
        if (letter == "@") {
            foundat = true;
            console.log("found at");
        }
        if (letter == "." && foundat == true) {
            console.log("found dot");
            founddot = true;
        }
    }
    if (foundat == true && founddot == true) {
        document.getElementById("email").style.color = "black";
    }
    else {
        document.getElementById("email").style.color = "red";
    }
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
    var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=8fe79b85155beefc0a3882d4b1377ddd";
    var request = $.ajax({ type: "get", url: url, contentType: "json" });
    request.done(function (response) {
        console.log(response);
    });
}
getLocation();
