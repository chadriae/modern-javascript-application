// TODO line graph chart.js
// TODO show last 5 searches

import { showDate } from './js/showdate.js';
import { displayClock } from './js/displayclock.js';
import { showTemperature } from './js/showtemperature.js';
import { changeBackground } from './js/changebackground.js';

const currentCity = document.querySelector("#autocomplete");
const cityLocation = document.querySelector(".location");
const cityCoordinates = document.querySelector(".coordinates");

// Use enter key for submitting
currentCity.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        document.querySelector("#run").click();
    }
})

// Function to change HTML with current city
const cityHTML = (currentCity) => {
        cityLocation.innerHTML = `${currentCity}`;
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