var placeCityName = document.getElementById('city-name');
var placeCityTemp = document.getElementById('temp');
var placeCityWeatherDesc = document.getElementById('temp-desc');
var placeCityDate = document.getElementById('date-container');
let searchValue = document.getElementById('city-input');
let waetherCard = document.getElementById('weather-card');


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function search() {
    getWeatherData(`${searchValue.value}`);
    waetherCard.style.display = 'flex';
}

function getWeatherData(city) {
    let date = new Date;
    let cityName = `${city}`;
    let APIKey = '13a49ece254b7f95e3e56d715eddedbe';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(data => placer(data))

    function placer(data) {
        var cityName = data.name;
        var cityTemp = data.main.temp;
        var cityWeatherDesc = data.weather[0].main;
        var cityDateM = month[date.getMonth()];
        var cityDateWD = weekDays[date.getDay()];
        var cityDateD = date.getDate();

        placeCityName.innerText = cityName;
        placeCityTemp.innerText = Math.round(cityTemp);
        placeCityWeatherDesc.innerText = cityWeatherDesc;
        placeCityDate.innerText = `${cityDateWD}, ${cityDateM}${cityDateD}`
    };
};