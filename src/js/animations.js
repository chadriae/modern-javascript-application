// Animations
const addAnimation = (weather, index) => {
    const imgTemp0 = document.querySelector("#imgTemp0");
    const imgTemp1 = document.querySelector("#imgDayOne");
    const imgTemp2 = document.querySelector("#imgDayTwo");
    const imgTemp3 = document.querySelector("#imgDayThree");
    const imgTemp4 = document.querySelector("#imgDayFour");
    const imgTemp = [imgTemp0, imgTemp1, imgTemp2, imgTemp3, imgTemp4];

    switch (weather) {
        case "clouds":
            imgTemp[index].innerHTML = `<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_KUFdS6.json"  background="transparent"  speed="1"  style="width: 120px; height: 120px;"  loop  autoplay></lottie-player>`;
            return;
        case "rain":
            imgTemp[index].innerHTML = `<lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_9s6k5U.json"  background="transparent"  speed="1"  style="width: 120px; height: 120px;"  loop  autoplay></lottie-player>`;
            return;
        case "sun":
            imgTemp[index].innerHTML = `<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_Um0Z9o.json"  background="transparent"  speed="1"  style="width: 120px; height: 120px;"  loop  autoplay></lottie-player>`;
            return;
        case "storm":
            imgTemp[index].innerHTML = `<lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_LPtaP2.json"  background="transparent"  speed="1"  style="width: 120px; height: 120px;"  loop  autoplay></lottie-player>`;
            return;
        case "snow":
            imgTemp[index].innerHTML = `<lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_kZXVCH.json"  background="transparent"  speed="1"  style="width: 120px; height: 120px;"  loop  autoplay></lottie-player>`;
            return;
    }
}

export { addAnimation }