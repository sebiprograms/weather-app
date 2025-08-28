import './styles.css';
import keys from '../keys.json'

const API_KEY = keys.API_KEY
const searchButton = document.querySelector(".search")
const input = document.querySelector(".text")


const images = require.context('../icons', false, /\.(png|jpe?g|svg)$/);


images.keys().forEach((filename) => {
  const imgSrc = images(filename); // This gives the processed URL


  // Example: add images to the page
  const img = document.createElement("img");
  img.src = imgSrc;
  let length = filename.length
  // gets rid of ./ in file name
  img.classList.add(filename.slice(2,length))
  document.body.appendChild(img);
});




if (localStorage.getItem("location") != null) {
    // get previous search
    getWeather(localStorage.getItem("location"), API_KEY)
} else {
    // set a default if no previous searches
    getWeather('houston', API_KEY)
}


async function getWeather(location, API_KEY) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${API_KEY}&contentType=json`, {mode: 'cors'})
    const data = await response.json()
    console.log(data)

    // Update widget info
    let position = document.querySelector(".location")
    position.textContent = location

    let temperature = document.querySelector(".temp")
    temperature.textContent = data.currentConditions.temp + " °F"

    let description = document.querySelector(".description")
    description.textContent = data.description
}



searchButton.addEventListener('click', () => {
    let location = document.querySelector(".text").value.toLowerCase()
    getWeather(location, API_KEY);
    localStorage.setItem("location", location)

    let conditions = data.icon 
    console.log(icon)
})
