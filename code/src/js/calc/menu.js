let burger = document.querySelector(".burger");

export default function toggleMenu() {
  this.classList.toggle("burger--open");
  this.closest(".calc").classList.toggle("calc--menu-open");
}

burger.addEventListener("click", toggleMenu);
