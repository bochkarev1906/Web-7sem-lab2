class OpenWeatherAPI{
    constructor(){
        this.APIKey = 'c58e6bb780cae68578dd9ecad1db5756'
    }
    getByNameOfCity(cityName){
        const responce = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.APIKey}&lang=ru&units=metric`)
        return responce.json()
    }
    getByCoordinatesOfCity(position){
        const [latitude, longitude] = [position.coords.latitude, position.coords.longitude]
        const responce = fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.APIKey}&lang=ru&units=metric`)
        return responce.json()
    }
}