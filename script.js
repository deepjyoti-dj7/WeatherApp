const button = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const cityCondition = document.getElementById("city-condition");
const cityWind = document.getElementById("city-wind");
const cityHumidity = document.getElementById("city-humidity");

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b31a05ad3acb48f080d104634240211&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = cityInput.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.country}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;
    cityCondition.innerText = `${result.current.condition.text}`;
    cityWind.innerText = `Wind Speed: ${result.current.wind_kph}kph,`;
    cityHumidity.innerText = `Humidity: ${result.current.humidity}%`
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      button.click();
    }
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});
