import axios from "axios"
const zipInput = document.getElementById("zipInput2");
const submit = document.getElementById("submit")
let currentCity = document.getElementById("city")
let currentTempK = document.getElementById("temperaturek")
let currentTempC = document.getElementById("temperaturec")
let currentTempF = document.getElementById("temperaturef")
let currentCondition = document.getElementById("condition")
let currentIcon = document.getElementById("currenticon")

let zipCode = "40502"
submit.addEventListener("click", updateZip)

let selectedLocation = ""

function updateZip() {
    //zipInput.value = e.target.value;
 console.log("submit")
 console.log(zipInput.value)
    if(zipInput.value.length === 5){
        zipCode = zipInput.value;
    } else {
        console.log("alert invlaid zipcode")
    }
getWeather(zipCode)
}


async function getWeatherKelvin(zipCode) {
    const openWeatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=40bc842ca745787e7b42c27345fb9e4a`
    try {
        const response = await axios.get(openWeatherLink)
        const weatherInfoK = await response
        return weatherInfoK
        console.log("get success")
    } catch (error){
        console.log('get From API Error: ', error)
        return []
    }
}

async function getWeather(zipCode) {
    const weatherInfoK = await getWeatherKelvin(zipCode)
    console.log('Weather ', weatherInfoK)
    console.log(weatherInfoK.data.main.feels_like)
    let tempK = Math.ceil(weatherInfoK.data.main.feels_like)
    let tempC = Math.ceil(tempK-273.15);
    console.log(tempC)
    let tempF = Math.ceil((tempK - 273.15) *1.8 + 32)
    console.log(tempF)
    currentTempK.textContent = tempK + " K" 
    currentTempC.textContent = tempC + " C"
    currentTempF.textContent = tempF + " F"
    currentCity.textContent = weatherInfoK.data.name
    console.log(weatherInfoK.data.weather[0].description)
    currentCondition.textContent = weatherInfoK.data.weather[0].description
    let tempIcon = weatherInfoK.data.weather[0].icon
    currentIcon.src = `https://openweathermap.org/img/wn/${tempIcon}@2x.png`

    // currentTemp.textContent=`${weatherInfoK.data.main.feels_like}`
}

//getWeather();


/*-
function limit(element, max_chars)
{
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return 0; 
    else if(parseInt(value) > max) 
        return 100; 
    else return value;
}



//https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

'https://api.openweathermap.org/data/2.5/weather?zip=40502,us&appid=40bc842ca745787e7b42c27345fb9e4a'


https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


another exmplle

https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}


api key 40bc842ca745787e7b42c27345fb9e4a


/// input text 


<input type="number" placeholder="Zipcode" id="zipCode" onkeydown="limit(this, 6);" onkeyup="limit(this, 6);" onkeyup="this.value = minmax(this.value, 0, 6)" required>

function limit(element, max_chars)
{
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return 0; 
    else if(parseInt(value) > max) 
        return 100; 
    else return value;
}
-*/