let toggler = document.querySelector(".toggle")
let nav = document.querySelector("nav")
let close = document.querySelector(".close")

toggler.onclick = function () {
    nav.classList.add("open")
}

close.onclick = function () {
    nav.classList.remove("open")
}

document.onkeyup = function(e) {
    if (e.key == "Enter") {
        nav.classList.remove("open")
    }
}