
// BURGER MENU TOGGLE

function toggleBurgerMenu() {   /* Toggle classes when function is called by an 'onClick' function in HTML */
    document.querySelector("button.burger-menu").classList.toggle("active");    /* Mark Burger Menu toggle button as being activated */
    document.getElementById("burger-content").classList.toggle("hidden")        /* Toggle class hiding the Burger Menu contents by default */
}

