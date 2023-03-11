let count = document.querySelector(".count")
let prog = document.querySelector(".progress")
let input = document.querySelector("input")
let div = document.querySelector("div")

let maxLength = input.getAttribute("maxlength")

count.textContent = maxLength

input.oninput = function () {
    count.textContent = maxLength -  this.value.length
    count.textContent == 0? count.classList.add("zero") : count.classList.remove("zero")
    prog.style.width = `${(this.value.length * 100) / maxLength}%`
}