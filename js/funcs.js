function refreshWeatherHere () {
    weatherHere.innerHTML = ""
    const loadingCity = weatherHereLoading()
    weatherHere.append(loadingCity)
    navigator.geolocation.getCurrentPosition (position => {
        openWeatherAPI.getByCoordinatesOfCity(position)
            .then(weather => {
                weatherHere.innerHTML = ""
                weatherHere.append(weatherHereShow(weather))
            })
            .catch(() => {
                 alert('Что-то пошло не так... Пожалуйста, обновите страницу')
            })
    }
}
const weatherHereLoading = () => {
    const weatherHereLoadingTemp = document.querySelector('template#weather-here-loading')
    return document.importNode(weatherHereLoadingTemp.content, true)
}
const weatherHereShow = (weather) => {
    const weatherHereShowTemp = document.querySelector('template#weather-here')
    const newWeatherHere = document.importNode(weatherHereShowTemp.content, true)
    setParams(newWeatherHere, weather)
    return newWeatherHere
}
//???
const deleteFromFavorites = event => {
    const thisCityName = event.currentTarget.parentElement.firstElementChild.innerHTML
    const favoritesList = JSON.parse(localStorage.getItem('favoritesList'))
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList.filter(cityName => cityName !== thisCityName)))
    let citiesToRemove = []
    const favoritesList1 = JSON.parse(localStorage.getItem('favoritesList'))
    /*for (const cityElement of weatherCityFavorites.children) {
        const thisCityName = cityElement.querySelector('.name-city').innerText
        if (!(favoritesList1.includes(thisCityName)))
            citiesToRemove.push(cityElement)
    }*/
    citiesToRemove.forEach(cityToRemove => weatherCityFavorites.removeChild(cityToRemove))
}