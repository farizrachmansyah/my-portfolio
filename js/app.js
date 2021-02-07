function handle() {
    const burger = document.querySelector('.burger-btn');
    const mobileNav = document.getElementById('mobile-menu');

    if (!mobileNav.classList.contains("nav-show")) {
        mobileNav.classList.add("nav-show");
        burger.classList.add("burger-animated");
    } else {
        mobileNav.classList.remove("nav-show");
        burger.classList.remove("burger-animated");
    }
}