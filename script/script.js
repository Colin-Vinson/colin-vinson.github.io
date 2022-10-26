// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("nav")[0];

// Get the offset position of the navbar
var fixed = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= fixed) {
        navbar.classList.add("fixed")
    } 
    else {
        navbar.classList.remove("fixed");
    }
} 
