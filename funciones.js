document.addEventListener('DOMContentLoaded', () => {
    function toggleMenu() {
        const menu = document.getElementById("submenu1");
        if (menu) {
            menu.classList.toggle("hidden");
        }
    }

    function Minimenu() {
        const toggleBtn = document.getElementById('menu-toggle');
        const mainMenu = document.getElementById('main-menu');
        const submenu = document.getElementById('submenu1');

        if (toggleBtn && mainMenu && submenu) {
            toggleBtn.addEventListener('click', () => {
                mainMenu.classList.toggle('hidden');
            });

            // Puedes invocar esta función si tienes otro botón para mostrar el submenu
            function toggleSubmenu() {
                submenu.classList.toggle('hidden');
            }
        }
    }

    Minimenu(); // Invoca la función aquí
});
