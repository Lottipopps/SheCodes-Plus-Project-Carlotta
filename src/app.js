let today = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
let hour = today.getHours();
let minutes = today.getMinutes();
let date = today.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[today.getMonth()];
let weekDay = document.querySelector("#week-day");
let digitalClock = document.querySelector("#digital-clock");
weekDay.innerHTML = `${day}, ${date} ${month}`;
digitalClock.innerHTML = `${hour}:${minutes}`;

function citySearch(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#change-city");
  let apiKey = "1afc58971b81cc6c28c8a2b54f06eeb8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${changeCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(newCity);
}
function newCity(response) {
  let cityName = document.querySelector("h1");
  cityName.innerHTML = `${response.data.name}`;
  let realTemp = document.querySelector(".temperature-1");
  realTemp.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  let maxTemp = document.querySelector(".max-temp-1");
  maxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}°C`;
  let minTemp = document.querySelector(".min-temp-1");
  minTemp.innerHTML = `${Math.round(response.data.main.temp_min)}°C`;
}
let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", citySearch);

function myCity(response) {
  let cityName = document.querySelector("h1");
  cityName.innerHTML = `${response.data.name}`;
  let realTemp = document.querySelector(".temperature-1");
  realTemp.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  let maxTemp = document.querySelector(".max-temp-1");
  maxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}°C`;
  let minTemp = document.querySelector(".min-temp-1");
  minTemp.innerHTML = `${Math.round(response.data.main.temp_min)}°C`;
}
function myPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "1afc58971b81cc6c28c8a2b54f06eeb8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(myCity);
}
function pushButton() {
  navigator.geolocation.getCurrentPosition(myPosition);
}

let myPositionButton = document.querySelector("button");
myPositionButton.addEventListener("click", pushButton);
//function toCelsius(event) {
// event.preventDefault();
//let temperatureOne = document.querySelector(".temperature-1");
//temperatureOne.innerHTML = "8°C";
//let temperatureTwo = document.querySelector(".max-temp-1");
//temperatureTwo.innerHTML = "12°C";
//let temperatureThree = document.querySelector(".min-temp-1");
//temperatureThree.innerHTML = "6°C";
//}
//function toFarenheit(event) {
//event.preventDefault();
//let bigTemp = document.querySelector(".temperature-1");
//bigTemp.innerHTML = "46°F";
//let mediumTemp = document.querySelector(".max-temp-1");
//mediumTemp.innerHTML = "54°F";
//let smallTemp = document.querySelector(".min-temp-1");
// smallTemp.innerHTML = "43°F";
//}
//let celsiusButton = document.querySelector("#celsius-button");
//let farenheitButton = document.querySelector("#farenheit-button");
//celsiusButton.addEventListener("click", toCelsius);
//farenheitButton.addEventListener("click", toFarenheit);
