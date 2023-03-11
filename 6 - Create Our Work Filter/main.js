let mySwitch = document.querySelectorAll("ul li")
let gallery = document.querySelector("div")
let image = document.querySelectorAll("div img")

mySwitch.forEach(function (ele) {
    ele.onclick = function () {
        mySwitch.forEach(function(myele) {
            myele.classList.remove("active")
        })
        this.classList.add("active")

        let curr = this.getAttribute("data-cat")
        image.forEach(function (item) {
            item.style.display = "none"
        })
        for (i=0; i<gallery.children.length; i++) {
            if (gallery.children[i].classList.contains(curr) == true) {
                console.log(gallery.children[i])
                gallery.children[i].style.display = "block"
            }
        }
    }
})