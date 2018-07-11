const menu = {
    toggleMenu: function() {
        this.classList.toggle('burger--open');
        this.closest('.calc').classList.toggle('calc--menu-open');
    },
    changeCalcTheme: function() {
        this.closest('.calc').classList.toggle('theme-dark');
    },
    changeCalcType: function() {
        this.closest('.calc').classList.toggle('calc--scientific');
    }
};
export default menu;