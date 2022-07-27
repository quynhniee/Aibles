var navIcon = document.querySelector(".nav__icon")
var navMenu = document.querySelector(".nav__menu")
// Show NavMenu
addEvent(navIcon)
// Hide NavMenu
document.querySelectorAll(".nav__link").forEach(n => removeEvent(n))

function removeEvent(params) {
    params.addEventListener("click", () => {
        navIcon.classList.remove("active");
        navMenu.classList.remove("active");
    })
}
function addEvent(params) {
    params.addEventListener("click", () => {
        navIcon.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
}