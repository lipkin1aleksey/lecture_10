let burger = document.querySelector(".burger");


function toggleMenu() {
    this.classList.toggle("burger--open");
    this.parentElement.classList.toggle("menu--open");
}

burger.addEventListener("click", toggleMenu);