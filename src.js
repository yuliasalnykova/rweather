

function getWeather() {
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rivne&appid=e55d70911ec5f19005dada0c498159ce`)
      .then((response) => response.json())
      .then((data) => {
        const weatherInfoDiv = document.getElementById("weather-info");
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
  
        weatherInfoDiv.innerHTML = 'Температура: ' + temperature + '&deg;C<br>' + 'Вологість: ' + humidity + '%<br>' + 'Швидкість вітру: ' + windSpeed + 'м/с';      });
  }