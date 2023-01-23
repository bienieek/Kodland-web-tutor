const hamburgerBars = document.querySelector(".hamburger__bars")
const hamburgerList = document.querySelector(".hamburger__list")
const navbarSite = document.querySelector(".site_address--navbar")

hamburgerBars.addEventListener("click", () => {
    hamburgerBars.classList.toggle("active")
    hamburgerList.classList.toggle("active")

    
})