// Function to change background according to city
const changeBackground = currentCity => {
    fetch (`https://api.unsplash.com/search/photos/?query=${currentCity}&client_id=00WYi-JstJlyoIEg8SJDxYOS-9RB4Hr7_yfu5gpIO2g`)
    .then(response => response.json())
    .then(data => {
        let randomNumber = Math.floor(Math.random() * 5);
        let imgUrl = data["results"][randomNumber]["urls"]["full"];
        document.body.style.backgroundImage = `url(${imgUrl})`;
    })
}

export { changeBackground }