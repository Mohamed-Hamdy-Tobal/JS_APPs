let hexNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let myList = []

for (i=0; i< 6; i++) {
    myList.push(hexNum[Math.floor(Math.random() * hexNum.length)])
}
let final = `#${myList.join("")}`
console.log(final)

document.body.style.backgroundColor = final