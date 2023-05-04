let myTab = document.querySelector("ul")
let myTabEle = document.querySelectorAll("ul li")
let content = document.querySelectorAll("div div")

myTabEle.forEach((element, i) => {
    let n = 0
    element.onclick = function () {
        myTabEle.forEach(ele => {
            ele.classList.remove("active")
        })
        this.classList.add("active")
        n = i
        
        content.forEach((ele, j, arr) => {
            ele.style.display = "none"
            arr[n].style.display = "block"
        })
    }
});