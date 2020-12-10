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

export { showPosition }