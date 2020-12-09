// Show the date
let showDate = () => {
    let date = new Date();
    let dateDay = date.getDate();
    let dateMonth = (date.getMonth() + 1);
    let dateYear = date.getFullYear();
    let weekDay = (date.getDay());
    let dayWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.querySelector("#date").innerHTML = `${dayWeek[weekDay - 1]}<br>${months[dateMonth - 1]} ${dateDay}<br>${dateYear}`

    let newContent = document.createElement("p");

    let weekDay1 = document.getElementById('weekDayOne');
    let weekDay2 = document.getElementById('weekDayTwo');
    let weekDay3 = document.getElementById('weekDayThree');
    let weekDay4 = document.getElementById('weekDayFour');

    let weekDays = [weekDay1, weekDay2, weekDay3, weekDay4];

    let i = 0;
    weekDays.forEach ((dayOfTheWeek) => {
        let j = (weekDay + i) % 7;
        dayOfTheWeek.textContent = `${dayWeek[j]}`;
        i++
    });
};

export { showDate };