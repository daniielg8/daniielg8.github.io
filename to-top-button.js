
// Executes once DOM content is fully loaded execute
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("top-button");
    const trigger_heading = document.querySelector("#item3");
    
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            // If ID is not visible
            if(!entry.isIntersecting){
                button.style.transform = "translateX(0px)";
                button.style.opacity = "1"
            } else {
                button.style.opacity = "0";
                button.style.transform = "translateX(50px)";
            }
        })
    }, {
        // Once ID is not visible
        threshold: 0
    })
    
    observer.observe(trigger_heading);


    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});