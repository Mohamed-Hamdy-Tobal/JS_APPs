let myColors = document.querySelector(".colors")
let myButton = document.querySelector("#button")
let feedback = document.querySelector(".feedback")
let myImage = document.querySelector(".product-card .product-image")
let car = document.querySelector(".product-description h3")

for (i=0; i < myColors.children.length; i++) {
    myColors.children[i].onclick = function () {
        // console.log(window.getComputedStyle(this, null).getPropertyValue("background-color"))
        myBg = window.getComputedStyle(this, null).getPropertyValue("background-color")
        myButton.style.backgroundColor = myBg
        car.style.backgroundColor = myBg

        if (myBg == "rgb(0, 0, 0)") {
            myImage.style.backgroundImage = 'url("images/black.jfif")';
        }
        if (myBg == "rgb(255, 0, 0)") {
            myImage.style.backgroundImage = 'url("images/red2.jfif")';
        }
        if (myBg == "rgb(128, 128, 128)") {
            myImage.style.backgroundImage = 'url("images/gray.jfif")';
        }
    }
}

myButton.onclick = function () {
    this.style.display = "none"
    feedback.style.display = "block"
}

// window.getComputedStyle(myColors.children[0], null).getPropertyValue("background-color")