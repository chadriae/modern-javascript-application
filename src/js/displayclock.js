// Live clock
const displayClock = () => {
    let time = new Date();

    const timeClock = standIn => {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
    }
    
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    timeNow.innerHTML = timeClock(hours) + ":" + timeClock(minutes) + ":" + timeClock(seconds);
}
setInterval(displayClock, 1000);

export { displayClock }