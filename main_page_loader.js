function main_page() {
    const main_page = document.getElementById("main_page");
    const access_area = document.getElementById("access_area");
    const main_page_bg = document.getElementById("main_page_bg");
    
    const access_area_elements = Array.from(access_area.children); 

    main_page.style.opacity = 1;

    access_area_elements.forEach((ele, index) => {
        ele.style.transform = "translateY(100vh)";   
        ele.style.visibility = "visible";
        ele.animate(
        [
            { transform: "translateY(90vh)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 }
        ],
        {
            duration: 700,
            delay: index * 150,
            fill: "forwards",
            easing: "ease-out"
        }
    );
    });

    gen_bg_lines(main_page);



    access_area.addEventListener("click", (event) => {
        const btn = event.target;
        
        if (btn.id == "Home") {
            main_page();
        }

        if (btn.id == "About") {
            about_page();
        }

        
    })

}