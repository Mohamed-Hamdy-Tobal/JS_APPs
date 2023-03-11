let myScroll = document.querySelector("div")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight  // 5000 - اللواجهة اللي انا فيها

document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop
    myScroll.style.width = `${(scrollTop / height) * 100}%` // (كل اللي نزلته / ارتفاع الصفحة نفسها)
})