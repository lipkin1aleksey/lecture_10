let button = document.querySelector(".themeSwitcher");

changeTheme = () => {
    document.querySelector(".wrapper").classList.toggle("theme-dark");
}

button.addEventListener("change", changeTheme);