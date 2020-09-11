let activate1 = document.getElementById("raw"); //binds through DOM
let activate2 = document.getElementById("formatted"); //binds through DOM and JS
let activate3 = document.getElementById("wanted"); //binds through DOMbutton and JS
let result = document.getElementById("result");
activate1.addEventListener("click", getWeather1);
activate2.addEventListener("click", getWeather2);
// activate3.addEventListener("click", getWeather3);

// weather API http://weerlive.nl/delen.php
let apiAdress = "http://weerlive.nl/api/json-data-10min.php?key="; //adress
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam"; //Location as string
let url = apiAdress + key + locatie + geoLocation; //url of the API

function getWeather1()
{
    console.log(url);
    makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
}
function showWeather1(JSONresponseFromAjax)
{
    result.innerHTML = JSONresponseFromAjax; //Shows the raw data
}