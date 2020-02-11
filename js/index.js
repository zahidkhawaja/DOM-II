const busHover = document.querySelector(".intro img");

busHover.addEventListener("mouseenter", () => {
    busHover.style.filter = "brightness(95%)";
});

busHover.addEventListener("mouseleave", () => {
    busHover.style.filter = "brightness(100%)";
});

