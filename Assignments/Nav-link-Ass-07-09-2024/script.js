/*Initialising variables: there are 3 ways to initialise variabes: let, constant, and bar(traditional, and rarely used). const is used to initialise variables that we don't want the values to change.*/
//this code targets the html element with the id=menu, i.e. the ul//
const menu = document.getElementById('menu');

//this code targets the menu-toggle button/icon//
const togglebutton = document.querySelector('menu-toggle');

//this targets the 'anchor' tags under the menu. This is done because the 'anchor' tags do not have a class or id//
const menuitems = document.querySelectorAll('menu a');

//this controls the menu visibilty when the toggle button is clicked//
function togglemenu() {
    menu.classList.toggle('show')
    

    if(menu.classList.contains('show')) {
        togglebutton.setAttribute('aria-expanded', 'true')
        togglebutton.innerHTML = '&times;'; //replace with "x" icon//

        //this code targets the first menu item (the Home)//
        const firstmenuitem = menu.queryselector('a');
        if (firstmenuitem) {
            firstmenuitem.focus();
        } else {
            togglebutton.setAttribute('aria expanded', 'false')
            togglebutton.innerHTML = '&#9776;'; //replace with 'menu' icon//
        }
    }
}