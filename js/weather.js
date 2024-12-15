const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "58697d0b7f75fb175159d41162c3ef9c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      city.innerText = data.name || "Unknown City";
      weather.innerText = `${data.weather[0]?.main || "Clear"} / ${data.main?.temp || "0"}°C`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      weather.innerText = "Weather unavailable";
      city.innerText = "Unknown";
    });
}

function onGeoError() {
  alert("Can't find you. WHERE ARE YOUUUU.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
