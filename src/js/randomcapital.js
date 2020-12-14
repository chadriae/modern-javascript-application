const randomCapital = (randomCapital, randomCountry) =>{
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
         })
}

export { randomCapital }