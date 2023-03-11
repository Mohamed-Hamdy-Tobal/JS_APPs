function myClock() {
    let myNew = new Date()
    let hours = myNew.getHours()
    let minutes = myNew.getMinutes()
    let seconds = myNew.getSeconds()

    if (hours < 10) {
        hours = `0${hours}`
    } else if (minutes < 10) {
        minutes = `0${minutes}`
    } else if (seconds < 10) {
        seconds = `0${seconds}`
    }

    document.querySelector("div").textContent = `${hours}:${minutes}:${seconds}`
}

window.onload = function () {
    setInterval(myClock, 500)
}