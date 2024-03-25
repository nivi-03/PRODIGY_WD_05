function getWeather() {
    const apiKey = '2e072066b3209cc47c747930e8b0a360'; // Replace with your WeatherAPI.com API key
    const locationInput = document.getElementById('location').value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Current Weather: ${data.current.condition.text}</p>
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>UV Index: ${data.current.uv}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} km/h</p>
        <p>Dew Point: ${data.current.dewpoint_c} °C</p>
        <p>Pressure: ${data.current.pressure_mb} mb</p>
        <p>Sunrise: ${data.forecast.forecastday[0].astro.sunrise}</p>
        <p>Sunset: ${data.forecast.forecastday[0].astro.sunset}</p>
    `;
}
