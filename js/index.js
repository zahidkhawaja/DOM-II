const bus = document.querySelector(".intro img");

// Adjust bus image brightness upon hovering
bus.addEventListener("mouseenter", () => {
    bus.style.filter = "brightness(95%)";
});

bus.addEventListener("mouseleave", () => {
    bus.style.filter = "brightness(100%)";
});

// Decrease bus image size after double clicking
bus.addEventListener("dblclick", () => {
    bus.style.transform = "scale(0.85)";
    bus.style.backgroundColor = "black";
});

const logo = document.querySelector(".logo-heading");

// Make logo purple and increase font weight when clicked
logo.addEventListener("click", () => {
    logo.style.color = "purple";
    logo.style.fontWeight = "800";
    logo.style.backgroundColor = "yellow";
});

// Underline all paragraph text as you mouse over it 
document.querySelectorAll("p").forEach(p => {
    p.addEventListener("mouseenter", () => {
    p.style.textDecoration = "underline";
})});

// Show an alert if any is copied
document.querySelectorAll("p").forEach(text => {
    text.addEventListener("copy", () => {
    alert("Please don't copy text!");
})});

const intro = document.querySelector("body .intro");

// Give intro section a background if double clicked
document.addEventListener("dblclick", () => {
    intro.style.backgroundColor = "orange";
})

// Top section has low opacity initially
intro.style.opacity = "0.1";

// Upon page loading, the top section's opacity increases to 1 and there's a 2 second transition
window.addEventListener("load", () => {
    intro.style.opacity = "1";
    intro.style.setProperty("transition", "opacity 2s ease-in");
})

const content = document.querySelector(".content-section");

// Upon scrolling, the second section ("Let's Go!") fades in using the same opacity/transition properties
window.addEventListener("scroll", () => {
    content.style.opacity = "1";
    content.style.setProperty("transition", "opacity 2s ease-in");
});

// The second section initially loads with a low opacity (faded)
window.addEventListener("load", () => {
    content.style.opacity = "0.1";
});

// Alert user if window is resized :)
window.addEventListener("resize", () => {
    alert("Resize all you want! This site is responsive!");
});

// Alert if any key is pressed
window.addEventListener("keydown", () => {
    alert("You pressed a key!");
});

// Alert user if the context menu is opened
window.addEventListener("contextmenu", () => {
    alert("You're opening the context menu!");
});

const testing = document.querySelector("body");

document.addEventListener("click", () => {
    testing.style.backgroundColor = "ghostwhite";
});

const footer = document.querySelector("footer");

document.addEventListener("click", () => {
    footer.style.backgroundColor = "orange";
    footer.preventPropagation();
});

const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
});






