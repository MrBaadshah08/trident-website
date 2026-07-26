// Sticky Header Shadow + Back To Top

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const backToTop = document.getElementById("backToTop");

    function handleScroll() {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }

        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});