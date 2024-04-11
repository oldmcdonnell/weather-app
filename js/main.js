import axios from "axios"
const zipInput = document.getElementById("zipInput2");
const submit = document.getElementById("submit")
//zipInput.addEventListener("change", updateZip)
let zipCode = "40502"
submit.addEventListener("click", updateZip)

function updateZip() {
    //zipInput.value = e.target.value;
 console.log("submit")
 console.log(zipInput.value)
getWeather(zipInput.value)
}


/*-
if(zipInput.value.length === 5){
    zipCode = zipInput.value;
}
-*/

//const zipCode = "40502"

//const staticLink = `https://api.openweathermap.org/data/2.5/weather?zip=40502,us&appid=40bc842ca745787e7b42c27345fb9e4a`

// ${zipCode}
async function getWeatherFromAPI(zipCode) {
    const openWeatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=40bc842ca745787e7b42c27345fb9e4a`
    try {
        const response = await axios.get(openWeatherLink)
        return response
        // const weatherInfo = await response
        // return weatherInfo
        console.log("get success")
    } catch (error){
        console.log('Error: ', error)
        return []
    }
}

async function getWeather(zipCode) {
    const weatherInfo = await getWeatherFromAPI(zipCode)
    console.log('Weather ', weatherInfo)
    console.log(weatherInfo.data.main.feels_like)
    let currentTemp = weatherInfo.data.main.feels_like
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