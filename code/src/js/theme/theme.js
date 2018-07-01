let button = document.querySelector(".switcher input[type='checkbox']");

changeTheme = () => {
    document.querySelector(".wrapper").classList.toggle("theme-dark");
}

button.addEventListener("change", changeTheme);