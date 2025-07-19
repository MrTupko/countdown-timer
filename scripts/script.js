class Timer {
    constructor(days) {
        this.secondsInDay = 86400;
        this.secondsInHour = 3600;
        this.secondsInMinutes = 60;
        this.timeLeft = this.setTime(days);
    }

    setTime(days) {
        return days * this.secondsInDay;
    }

    run() {
        const intervalId = setInterval(() => {
            this.timeLeft -= 1;
            this.updateCounters();
            if (this.timeLeft === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    updateCounters() {
        seconds = this.timeLeft;
        days = ("" + Math.floor(seconds / this.secondsInDay)).padStart(2, "0");
        seconds = seconds % this.secondsInDay;
        hours = ("" + Math.floor(seconds / this.secondsInHour)).padStart(2, "0");
        seconds = seconds % this.secondsInHour;
        minutes = ("" + Math.floor(seconds / this.secondsInMinutes)).padStart(2, "0");
        seconds = ("" + (seconds % this.secondsInMinutes)).padStart(2, "0");

        if (document.getElementById("daysLeftTop").innerText !== days) {
            this.updateCard("days", days);
        }

        if (document.getElementById("hoursLeftTop").innerText !== hours) {
            this.updateCard("hours", hours);
        }

        if (document.getElementById("minutesLeftTop").innerText !== minutes) {
            this.updateCard("minutes", minutes);
        }

        if (document.getElementById("secondsLeftTop").innerText !== seconds) {
            this.updateCard("seconds", seconds);
        }
    }

    updateCard(id, value) {
        const card = document.getElementById(id);
        const top = document.getElementById(`${id}LeftTop`);
        const bottom = document.getElementById(`${id}LeftBottom`);
        card.style.animationName = "rotate";
        top.style.animationName = "flip"
        bottom.style.animationName = "flip"
        setTimeout(() => {
            top.innerText = value
            bottom.innerText = value
        }, 250);

        setTimeout(() => {
            card.style.animationName = "";
            top.style.animationName = ""
            bottom.style.animationName = ""

        }, 490);
    }
}

let countdown = new Timer(14);
countdown.updateCounters();
countdown.run();