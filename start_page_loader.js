const starter_text = document.getElementById("starter_text");
const cursor = document.getElementById("cursor");
const enter_button = document.getElementById("enter_button");

const text = "Welcome. . . .";

let index = 0;

function typeText() {
    cursor.style.animation = "none";
    cursor.style.backgroundColor = "#000";
    if (index < text.length) {
        starter_text.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200);
    }
    else {
        cursor.style.animation = "blink 1s steps(1) infinite";
        cursor.style.backgroundColor = "#949090";

        setTimeout(() => {
            enter_button.style.animation = "fadeIn 2s forwards";
        }, 1000)
    }
}

enter_button.addEventListener("click", () => {
    // Button animation
    enter_button.style.animation = "clicked 3s forwards";

    // Elements moving out animation
    setTimeout(() => {
        // trying Cubic Bezier curve
        starter_text.animate(
            [
                { transform: "translateY(0vh)" },
                { transform: "translateY(-100vh)" }
            ],
            {
                duration: 1000,
                easing: "cubic-bezier(1, 0, 0.6, 0.7)",
                fill: "forwards"
            }
        );

        setTimeout(() => {
            cursor.animate(
                [
                    { transform: "translateY(0vh)" },
                    { transform: "translateY(-100vh)" }
                ],
                {
                    duration: 1000,
                    easing: "cubic-bezier(1, 0, 0.6, 0.7)",
                    fill: "forwards"
                }
            );

            setTimeout(() => {
                starter_text.remove();
                cursor.remove();
            })
        }, 300);

            

        // original
        //starter_text.style.transition = "transform 1s ease";
        //starter_text.style.transform = "translateY(-50vh)";
    }, 3050);
    // Page Change
    setTimeout(() => {
        document.location.href = "old_index.html" // placeholder for now
    }, 5000);
})

setTimeout(typeText, 2100);