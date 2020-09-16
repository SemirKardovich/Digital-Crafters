let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("nav-links");

let navShow = false;

hamburger.addEventListener("click", function(){
    if(!navShow){
        navLinks.classList.add("show-nav");
        navLinks.classList.remove("close-nav");
        navShow = true;
    }else {
        navLinks.classList.remove("show-nav");
        navLinks.classList.add("close-nav");
        navShow = false;
    }
    
});