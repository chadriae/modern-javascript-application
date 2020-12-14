// npm run dev  
// om op te starten

import { showDate } from './js/showdate.js';
import { displayClock } from './js/displayclock.js';
import { showTemperature } from './js/showtemperature.js';
import { changeBackground } from './js/changebackground.js';
// import { randomCapital } from './js/randomcapital.js';

const currentCity = document.querySelector("#autocomplete");
const cityLocation = document.querySelector(".location");
const cityCoordinates = document.querySelector(".coordinates");

// Fetch weather data of a random capital city
document.querySelector("#capital").addEventListener("click", () =>{
    const url = "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json";
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            let randomNumber = Math.floor(Math.random() * data.length);
            let randomCountry = data[randomNumber]["country"];
            let randomCapital = data[randomNumber]["city"];
            cityHTML(randomCapital, randomCountry);
            changeBackground(randomCapital);
            showTemperature(randomCapital);
            displayClock();
            showTemperature(randomCapital);
         })
})


// Use enter key for submitting
currentCity.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        document.querySelector("#run").click();
    }
})

// Function to change HTML with current city
const cityHTML = (currentCity, currentCountry) => {
    if (currentCity != null){
        cityLocation.innerHTML = `${currentCity}, ${currentCountry}`;
    }
    else {
        console.log(`${currentCity} is not a valid city.`)
    }
}

// Executions for location of user
window.addEventListener("load", () => {
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            cityCoordinates.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    const showPosition = position => {
        // Show place name based on coordinates
        fetch (`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=0dc9b14ba9a846f19428714fed4f54cc`)
            .then(response => response.json())
            .then(data => {
            let currentCity = data["results"]["0"]["components"]["city"];
            let currentCountry = data["results"]["0"]["components"]["country"];
            cityHTML(currentCity, currentCountry);
            changeBackground(currentCity);
            showTemperature(currentCity);
        })
    }
    getLocation();
    displayClock();
    showDate();
})

// Executions after click or enter
document.querySelector("#run").addEventListener("click", function() {
    cityHTML(currentCity.value);
    changeBackground(currentCity.value);
    showTemperature(currentCity.value);
    displayClock();
    showDate();
    showTemperature(currentCity);
}) 