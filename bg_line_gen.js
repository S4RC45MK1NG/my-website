function gen_bg_lines(parent) {
    globalThis.line_gen = setInterval(() => {
        const line = document.createElement("div");
        parent.appendChild(line);

        const y = Math.floor(90 * Math.random()) + 10;
        const time = Math.floor(10 * Math.random()) + 5;

        line.innerHTML = `<pre class="font-[Jetbrains] font-extrabold  opacity-[0.5] whitespace-pre leading-none overflow-hidden">------------------</pre>`;
        line.style.position = "fixed";
        line.style.top = `${y}vh`;
        line.style.left = "-10vw"; 
        
        line.style.transform = "translateX(0)";
        line.offsetWidth;

        line.style.transition = `transform ${time}s ease`;
        line.style.transform = "translateX(110vw)";
        
        setTimeout(() => {
            line.remove();
        }, time*1000)


    }, 1000)
}