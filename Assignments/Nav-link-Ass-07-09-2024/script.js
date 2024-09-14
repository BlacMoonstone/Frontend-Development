// Initializing variables using the const method. This is used when we don't want the value of the variable to change.
const menu = document.getElementById('menu');
const togglebutton = document.getElementById('menu-toggle');
const menuitems = document.querySelectorAll('#menu a');

// Function to control menu visibility
function togglemenu() {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        togglebutton.setAttribute('aria-expanded', 'true');
        togglebutton.innerHTML = '&times;'; // Replace with "x" icon

        const firstmenuitem = menu.querySelector('a');
        if (firstmenuitem) {
            firstmenuitem.focus();
        }
    } else {
        togglebutton.setAttribute('aria-expanded', 'false');
        togglebutton.innerHTML = '&#9776;'; // Replace with 'menu' icon
    }

    // Keyboard navigation control
    document.addEventListener('keydown', (event) => {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.getAttribute('role') === 'menuitem') {
            const currentIndex = Array.prototype.indexOf.call(menuitems, activeElement);
            if (event.key === 'ArrowDown') {
                const nextIndex = (currentIndex + 1) % menuitems.length;
                menuitems[nextIndex].focus();
                event.preventDefault();
            } else if (event.key === 'ArrowUp') {
                const prevIndex = (currentIndex - 1 + menuitems.length) % menuitems.length;
                menuitems[prevIndex].focus();
                event.preventDefault();
            } else if (event.key === 'Escape') {
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                    togglebutton.setAttribute('aria-expanded', 'false');
                    togglebutton.innerHTML = '&#9776;';
                    togglebutton.focus(); // Focus back on the toggle button
                }
            }
        }
    });
}