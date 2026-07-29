const mouse = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    mouse.style.left = e.pageX -24 + "px";
    mouse.style.top = e.pageY + "px";
});

