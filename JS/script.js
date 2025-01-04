document.addEventListener("DOMContentLoaded", () => {
    const menuBars = document.getElementById("menu-bars");
    const menuClose = document.getElementById("menu-close");
    const menu = document.getElementById("menu");

    menuBars.addEventListener("click", () => {
        menu.classList.remove("d-none");
        menuBars.classList.add("d-none");
        menuClose.classList.remove("d-none");
    });

    menuClose.addEventListener("click", () => {
        menu.classList.add("d-none");
        menuBars.classList.remove("d-none");
        menuClose.classList.add("d-none");
    });
});
