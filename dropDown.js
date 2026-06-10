let isMobile = window.innerWidth <= 759;

function updateNav() {
    const nav = document.querySelector("ul");
    const navContainer = document.querySelector("header");

    if (!nav || !navContainer) return;

    navContainer.classList.remove("show");
    nav.classList.remove("dropHide", "dropShow", );

    if (window.innerWidth <= 759) {
        nav.classList.add("dropHide");
    } else {
        nav.classList.add("dropShow");
    }

    setTimeout(() => {
        navContainer.classList.add("show");
    }, 75);
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