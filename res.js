const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
})


const heroContent = document.querySelector(".hero-content");

function animateHero() {
    heroContent.classList.remove("animate");

    // force reflow (important trick)
    void heroContent.offsetWidth;

    heroContent.classList.add("animate");
}

// run every 5 seconds
setInterval(animateHero, 5000);

// run once on load
animateHero();