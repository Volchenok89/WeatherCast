let key = "48d7a84731553477886491771a6359f3";
let cityWeather = {};
let city = document.getElementById("cityName");

// Button//
let button = document.getElementById("button");

button.addEventListener("click", function(event) {
    event.preventDefault();

//Look Up History//

let lookUpHistory = JSON.parse(localStorage.getItem("lookUpHistory")) ?? [];
    lookUpHistory.push(city.value);
    localStorage.setItem("lookUpHistory", JSON.stringify(lookUpHistory));

    let list = document.getElementById("lookUpHistory");
    list.innerHTML = "";
    for (let i = 0; i < lookUpHistory.length; i++) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(lookUpHistory[i]));
        list.appendChild(p);
}

// Cities Weather information//

fetchCastByCity(city.value)
.then(data => {
    console.log(data);
    document.getElementById("weather0").textContent = `${city.value} ${dayjs.unix(data.daily[0].dt).format("(dddd/MM/DD/YYYY)")}`;
    document.getElementById("pic0").src = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`;
    document.getElementById("temp0").textContent = `Temp: ${data.daily[0].temp.day}°F`;
    document.getElementById("wind0").textContent = `Wind: ${data.daily[0].wind_speed} MPH`;
    document.getElementById("humid0").textContent = `Humidity: ${data.daily[0].humidity} %`;
    document.getElementById("uv0").textContent = `UV Index: ${data.daily[0].uvi}`;

    document.getElementById("weather1").textContent = `${dayjs.unix(data.daily[1].dt).format("(dddd/DD)")}`;
    document.getElementById("pic1").src = `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`;
    document.getElementById("temp1").textContent = `Temp: ${data.daily[1].temp.day}°F`;
    document.getElementById("wind1").textContent = `Wind: ${data.daily[1].wind_speed} MPH`;
    document.getElementById("humid1").textContent = `Humidity: ${data.daily[1].humidity} %`;
    document.getElementById("uv1").textContent = `UV Index: ${data.daily[1].uvi}`;

    document.getElementById("weather2").textContent = `${dayjs.unix(data.daily[2].dt).format("(dddd/DD)")}`;
    document.getElementById("pic2").src = `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`;
    document.getElementById("temp2").textContent = `Temp: ${data.daily[2].temp.day}°F`;
    document.getElementById("wind2").textContent = `Wind: ${data.daily[2].wind_speed} MPH`;
    document.getElementById("humid2").textContent = `Humidity: ${data.daily[2].humidity} %`;
    document.getElementById("uv2").textContent = `UV Index: ${data.daily[2].uvi}`;

    document.getElementById("weather3").textContent = `${dayjs.unix(data.daily[3].dt).format("(dddd/DD)")}`;
    document.getElementById("pic3").src = `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`;
    document.getElementById("temp3").textContent = `Temp: ${data.daily[3].temp.day}°F`;
    document.getElementById("wind3").textContent = `Wind: ${data.daily[3].wind_speed} MPH`;
    document.getElementById("humid3").textContent = `Humidity: ${data.daily[3].humidity} %`;
    document.getElementById("uv3").textContent = `UV Index: ${data.daily[3].uvi}`;

    document.getElementById("weather4").textContent = `${dayjs.unix(data.daily[4].dt).format("(dddd/DD)")}`;
    document.getElementById("pic4").src = `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`;
    document.getElementById("temp4").textContent = `Temp: ${data.daily[4].temp.day}°F`;
    document.getElementById("wind4").textContent = `Wind: ${data.daily[4].wind_speed} MPH`;
    document.getElementById("humid4").textContent = `Humidity: ${data.daily[4].humidity} %`;
    document.getElementById("uv4").textContent = `UV Index: ${data.daily[4].uvi}`;

    document.getElementById("weather5").textContent = `${dayjs.unix(data.daily[5].dt).format("(dddd/DD)")}`;
    document.getElementById("pic5").src = `http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png`;
    document.getElementById("temp5").textContent = `Temp: ${data.daily[5].temp.day}°F`;
    document.getElementById("wind5").textContent = `Wind: ${data.daily[5].wind_speed} MPH`;
    document.getElementById("humid5").textContent = `Humidity: ${data.daily[5].humidity} %`;
    document.getElementById("uv5").textContent = `UV Index: ${data.daily[5].uvi}`;

});

});

//Latitude-longitude info//

function fetchCastByCity(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${key}`)
        .then(response => response.json())
        .then(data => fetchCastByCoord(data.coord.lat, data.coord.lon));
}

function fetchCastByCoord(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${key}`)
        .then(response => response.json());
}


    




