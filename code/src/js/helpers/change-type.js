let typeSwitcher = document.querySelector(".typeSwitcher");

changeCalcType = () => {
    document.querySelector(".calc").classList.toggle("calc--scientific");
}

typeSwitcher.addEventListener("change", changeCalcType);