// wait for initially required elements to load
const starter_page_loaded = false;

const load_check_interval = setInterval(() => {
    if (document.getElementById("enter_button")) {
        clearInterval(load_check_interval);
        starter_page()
        
    }
}, 500);