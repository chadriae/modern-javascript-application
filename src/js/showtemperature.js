// Function to show temperature according to city
const daysCount = 5;

import { addAnimation } from './animations.js';

const showTemperature = currentCity => {
        fetch (`https://api.weatherbit.io/v2.0/forecast/daily?city=${currentCity}&key=cbe1db44a04a412ebe4a95a03cba00cd&days=${daysCount}`)
    .then(response => response.json())
    .then(data => {
        let tempDayZero = data["data"]["0"]["temp"];
        temperatureDayZero.innerHTML = `${tempDayZero}°C`;
        const descriptions = [];
        for (let i = 0; i < daysCount; i ++) {
            let j;
            j = data["data"][i]["weather"]["description"];
            descriptions.push(j);
        }
        const descriptionDaysHtml = [document.querySelector("#descrDayZero"), document.querySelector("#descrDayOne"), document.querySelector("#descrDayTwo"), document.querySelector("#descrDayThree"), document.querySelector("#descrDayFour")];
        for (let i = 0; i < daysCount; i++) {
            descriptionDaysHtml[i].innerHTML = descriptions[i];
        }
        const minTemps = [];
        for (let i = 0; i < daysCount; i ++) {
            let j;
            j = data["data"][i]["min_temp"];
            minTemps.push(j);
        }
        const maxTemps = [];
        for (let i = 0; i < daysCount; i ++) {
            let j;
            j = data["data"][i]["max_temp"];
            maxTemps.push(j);
        }
        const minMaxTempsHtml = [document.querySelector("#temperatureDayOne"), document.querySelector("#temperatureDayTwo"), document.querySelector("#temperatureDayThree"), document.querySelector("#temperatureDayFour")];
        for (let i = 0; i < minMaxTempsHtml.length; i++) {
            minMaxTempsHtml[i].innerHTML = `min ${minTemps[i]}°C<br>max ${maxTemps[i]}°C`;
        }
        descriptions.forEach((element, index) => {
            if (element.includes("sun")){
                addAnimation("sun", index);
            }
            if (element.includes("Clear Sky")){
                addAnimation("sun", index);
            }
            if (element.includes("rain")){
                addAnimation("rain", index);
            }
            if (element.includes("drizzle")){
                addAnimation("rain", index);
            }
            if (element.includes("clouds")){
                addAnimation("clouds", index);
            }
            if (element.includes("storm")){
                addAnimation("storm", index);
            }
            if (element.includes("snow")){
                addAnimation("snow", index);
            }
        });
    })
}

export { showTemperature }