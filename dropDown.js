let isMobile = window.innerWidth <= 759;

function updateNav() {
    const nav = document.querySelector("ul");
    const navContainer = document.querySelector("header");
    
    if (!nav || !navContainer) return;
        
    navContainer.classList.remove("show");

    if (window.innerWidth <= 759) {
        
        nav.classList.remove("nav-container");
        nav.classList.add("dropHide");
        
        
    } else if (!document.querySelector("nav-container")){
        nav.classList.add("nav-container");
        nav.classList.remove("dropHide");
        
    }
    
    setTimeout(() => {
        navContainer.classList.add("show");
    }, 250);
}

document.addEventListener("DOMContentLoaded", () => {
    
    updateNav();

    window.addEventListener("resize", () => {
        const nowMobile = window.innerWidth <= 759;

        if (nowMobile === isMobile) return;

        isMobile = nowMobile;
        updateNav();
    });
});