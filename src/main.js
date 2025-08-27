import './styles.css';
import keys from '../keys.json'

const location = 'houston';
const API_KEY = keys.API_KEY

async function getWeather(location, API_KEY) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${API_KEY}&contentType=json`, {mode: 'cors'})
    const data = await response.json()
    console.log(data)

    // Update widget info
    let position = document.querySelector(".location")
    position.textContent = location

    let temperature = document.querySelector(".temp")
    temperature.textContent = data.currentConditions.temp
}

getWeather(location, API_KEY);
