var hamburger = document.querySelector(".header-button")
var header = document.querySelector(".span-header")
console.log(header);

hamburger.addEventListener("click", function() {
    header.classList.toggle("active")
})