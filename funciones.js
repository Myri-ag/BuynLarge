function Minimenu() {
    const toggleBtn = document.getElementById('menu-toggle'); // Este es tu botón
    const mainMenu = document.getElementById('main-menu'); // Este es el menú completo
    const submenu = document.getElementById('submenu1'); // Este es el submenu si lo necesitas

    if (toggleBtn && mainMenu) {
      
        mainMenu.classList.toggle('hidden');
    }

   
    if (submenu) {
        submenu.classList.toggle('hidden');
    }
}
