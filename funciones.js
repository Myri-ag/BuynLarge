function toggleMenu() {
    const menu = document.getElementById("submenu1");
    menu.classList.toggle("hidden");
}

function Minimenu(){
    const toggleBtn = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    const submenu = document.getElementById('submenu1');

    toggleBtn.addEventListener('click', () => {
        mainMenu.classList.toggle('visible');
    });
    function toggleSubmenu() {
        submenu.classList.toggle('visible');
    }
}
