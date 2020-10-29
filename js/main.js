const openWeatherAPI = new OpenWeatherAPI()
const weatherHere = document.querySelector('.weather-here')
const weatherCityFavorites = document.querySelector('.weather-city-list')
refreshWeatherHere()

const buttonUpdate = document.querySelectorAll('.update-button, .update-media')
buttonUpdate[i].addEventListener('click', refreshWeatherHere)	
const buttonAdd = document.querySelector('.add-city')
buttonAdd.addEventListener('submit', addToFavorites)