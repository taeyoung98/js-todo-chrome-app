const weatherIcon = document.querySelector("#weather span:first-child")
const weather = document.querySelector("#weather span:nth-child(2)")
const city = document.querySelector("#weather span:last-child")
const API_KEY = "a6c23d73fad6694b76e44ee18121fff6"

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const { main: status, icon } = data.weather[0]
        const src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        const img = document.createElement("img")
        img.src = src
        weatherIcon.appendChild(img)
        weather.innerText = `${status} / ${data.main.temp}`
        city.innerText = data.name
      }
    })
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
