function loadComponent(id, file) {
    fetch(`/src/components/${file}`)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "navbar.html");
    loadComponent("footer", "footer.html");
    loadComponent("hero", "hero.html");
    loadComponent("marquee", "marquee.html");
    loadComponent("features", "features.html");
    loadComponent("bigstats", "big-stats.html");
    loadComponent("reviews", "reviews.html");
    loadComponent("faq", "faq-list.html");
    loadComponent("products", "products.html");
    loadComponent("about", "about-text.html");
    loadComponent("contact", "contact-cards.html");
});
function appendComponent(id, file) {
    fetch(`/src/components/${file}`)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).insertAdjacentHTML("beforeend", html);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    appendComponent("features", "feature-card-01.html");
    appendComponent("features", "feature-card-02.html");
    appendComponent("features", "feature-card-03.html");
    appendComponent("features", "feature-card-04.html");
    appendComponent("features", "feature-card-05.html");
    appendComponent("features", "feature-card-06.html");
});
