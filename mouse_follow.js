const mouse = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
});

document.addEventListener("mouseenter", () => {
    mouse.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
    mouse.style.opacity = "0";
});