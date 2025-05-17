function myTime() {
  let hoy = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[hoy.getDay()];
  let hour = hoy.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutos = hoy.getMinutes();
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }
  let hora = document.querySelector("#hora");
  hora.innerHTML = `${day}, ${hour}:${minutos}.`;
}
myTime();

function myCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search");
  // let h1 = document.querySelector("h1");
  // h1.innerHTML = city.value.charAt(0).toUpperCase() + city.value.slice(1);
  dataCity(city.value);
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", myCity);

function myWeather(response) {
  let currentCity = response.data.city;
  let city = document.querySelector("h1");
  city.innerHTML = `${currentCity}`;

  let currentTemperature = Math.round(response.data.temperature.current);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `🌤️${currentTemperature}°C`;

  let currentCloud = response.data.condition.description;
  let cloudy = document.querySelector("#cloud");
  cloudy.innerHTML = `${currentCloud}`;
}

function dataCity(city) {
  let apiKey = "f5508dbob4332a0e13cf4db861t1cbba";
  let apiLink = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiLink).then(myWeather);
}
