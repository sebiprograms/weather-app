import './styles.css';
import API_KEY from '../keys.json'

const location = 'houston';


async function getWeather(location, API_KEY) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=KHMTTP5B2DZXPFTEXQ8TV7CST&contentType=json`, {mode: 'cors'})
    const data = await response.json()
    console.log(data)

    // Update widget location title
    let position = document.querySelector(".location")
    position.textContent = location
    // Update temperature displayed
    let temperature = document.querySelector(".temp")
    temperature.textContent = data.currentConditions.temp
}

getWeather(location, API_KEY);
