let countDownDate = new Date("Aug 3, 2021 14:05:10").getTime();
// console.log(countDownDate)

let timeLeft;
const update = setInterval(() =>
{
    let now = new Date().getTime();
    timeLeft = countDownDate - now;
    if(timeLeft > 0)
    {
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = (days < 10 ? "0" : "") + days;
        document.getElementById("hours").innerText = (hours < 10 ? "0" : "") + hours;
        document.getElementById("minutes").innerText = (minutes < 10 ? "0" : "") + minutes;
        document.getElementById("seconds").innerText = (seconds < 10 ? "0" : "") + seconds;
    }

    else
    {
        clearInterval(update);
        console.log("time up");

    }
}, 1000);

