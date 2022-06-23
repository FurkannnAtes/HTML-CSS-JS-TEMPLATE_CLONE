const hamburgerBtn = document.querySelector(".hamburger-menu")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const navbarNav = document.querySelector(".navbar-nav")




function hamburgerMenu() {
    hamburgerBtn.addEventListener("click", () => {
        bar1.classList.toggle("bar1Active");
        bar2.classList.toggle("bar2Active");
        bar3.classList.toggle("bar3Active");
        navbarNav.classList.toggle("navbar-navActive");

    })
}




hamburgerMenu();

var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function () {
        bar1.classList.toggle("bar1Active");
        bar2.classList.toggle("bar2Active");
        bar3.classList.toggle("bar3Active");
        navbarNav.classList.toggle("navbar-navActive");
    });

}






