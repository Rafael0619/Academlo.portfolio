// menú de navegación - Icono Hamburguesa.
const menuBtn = document.querySelector(".menu-btn");
const sidePanel = document.querySelector(".sidepanel");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if(!menuOpen){
        menuBtn.classList.add("open");
        sidePanel.classList.add("open-top");
        menuOpen = true;
    }else {
        menuBtn.classList.remove("open");
        sidePanel.classList.remove("open-top");
        menuOpen = false;
    }
});