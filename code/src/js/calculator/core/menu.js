class Menu {
    static toggleMenu() {
        let calc = this.closest('.calc');
        this.classList.toggle('burger--open');
        calc.classList.toggle('calc--menu-open');
    }
    static changeCalcTheme() {
        this.closest('.calc').classList.toggle('theme-dark');
    }
    static changeCalcType() {
        this.closest('.calc').classList.toggle('calc--scientific');
    }
    static closeMenu() {
        this.querySelector('.burger--open').classList.remove('burger--open');
        this.classList.remove('calc--menu-open');
    }
}
export default Menu;
