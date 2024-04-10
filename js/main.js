import { Axios } from "axios"


async function getWeatherFromAPI() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=40502,us&appid=40bc842ca745787e7b42c27345fb9e4a')
        const weatherInfo = await response.json()
        return weatherInfo
    } catch (error){
        console.log('Error: ', error)
        return []
    }
}

async function getWeather() {
    const weatherInfo = await getWeatherFromAPI()
    console.log('Weather ', weatherInfo)
}

getWeather()


/*-
//https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

'https://api.openweathermap.org/data/2.5/weather?zip=40502,us&appid=40bc842ca745787e7b42c27345fb9e4a'


https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


another exmplle

https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}


api key 40bc842ca745787e7b42c27345fb9e4a
-*/