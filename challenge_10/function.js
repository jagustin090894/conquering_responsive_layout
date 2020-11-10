let navToggle = document.querySelector(".nav-toggle");
let navCollapse = document.querySelector(".header");

navToggle.addEventListener("click", function () {
    navCollapse.classList.toggle("is-open");
});
