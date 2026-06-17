let isMobile = window.innerWidth <= 759;

document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector("ul");
    const menuBtn = document.querySelector(".nav-button");
    const navContainer = document.querySelector("header");
    
    if (!nav || !navContainer || !menuBtn) return;

    function updateNav() {

        navContainer.classList.remove("show");
        nav.classList.remove("show");

        if (window.innerWidth <= 759) {
       
            navContainer.classList.add("mobile")
            
        } else {
            
            navContainer.classList.remove("mobile")
            nav.classList.add("show");

            if(menuBtn.getElementsByClassName("active")){
                menuBtn.classList.remove("active");
            }

        }

        setTimeout(() => {
            navContainer.classList.add("show");
        }, 150);
    }

    updateNav();

    menuBtn.addEventListener ("click", () => {
        nav.classList.toggle("show");
        menuBtn.classList.toggle("active");
    })

    window.addEventListener("resize", () => {
        const nowMobile = window.innerWidth <= 759;

        if (nowMobile === isMobile) return;

        isMobile = nowMobile;
        updateNav();
    });

    });