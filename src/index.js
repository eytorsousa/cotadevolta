const header = document.querySelector("header");
const main_header = document.querySelector(".main_header");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    header.classList.toggle("hidden", scrolled > 50);
    main_header.classList.toggle("visible", scrolled > 250);
    main_header.classList.toggle("invisible", scrolled <= 250);
});
