document.addEventListener('DOMContentLoaded',()=>{
  const cityInput = document.getElementById('city-input');
  const getWeatherbtn = document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisplay = document.getElementById('city-name');
  const temperatureDisplay = document.getElementById('temperature');
  const descriptionDisplay = document.getElementById('description');
  const errorMessage = document.getElementById('error-message');

  const API_KEY = "ea2695f97d7d789be8730cc57c599146"; //env variable

  getWeatherbtn.addEventListener('click',()=>{
    const city = cityInput.value.trim();
    if(!city) return;
  })

  function fetchWeatheData(){
    // gets the data

  }

  function displayWeatherData(){
    // displays the weather data

  }

  function showError(){
    // shows the error
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
  }



});