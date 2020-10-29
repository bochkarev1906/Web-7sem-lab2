const openWeatherAPI = new OpenWeatherAPI()
const weatherHere = document.querySelector('.weather-here')
const weatherCityFavorites = document.querySelector('.weather-city-list')
if (!localStorage.getItem('favoritesList'))
    localStorage.setItem('favoritesList', '[]')
refreshWeatherHere()
loadWeatherFavorites()

const buttonUpdate = document.querySelectorAll('.update-button, .update-media')
for (let i = 0; i < buttonUpdate.length; i++){ 
    if (buttonUpdate){
        buttonUpdate[i].addEventListener('click', refreshWeatherHere)
    }
}	
const buttonAdd = document.querySelector('.add-city')
buttonAdd.addEventListener('submit', addToFavorites)