function loadComponent(id, file) {
    fetch(`/src/components/${file}`)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
}

function appendComponent(id, file) {
    fetch(`/src/components/${file}`)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).insertAdjacentHTML("beforeend", html);
        });
}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("navbar", "navbar.html");
    loadComponent("footer", "footer.html");

    loadComponent("hero", "hero.html");

    loadComponent("marquee", "marquee.html");

    appendComponent("features", "feature-card-01.html");
    appendComponent("features", "feature-card-02.html");
    appendComponent("features", "feature-card-03.html");
    appendComponent("features", "feature-card-04.html");
    appendComponent("features", "feature-card-05.html");
    appendComponent("features", "feature-card-06.html");

    appendComponent("bigstats", "big-stats.html");

    appendComponent("reviews", "review-01.html");
    appendComponent("reviews", "review-02.html");
    appendComponent("reviews", "review-03.html");

    loadComponent("faq", "faq-list.html");

    appendComponent("products", "product-card-01.html");
    appendComponent("products", "product-card-02.html");
    appendComponent("products", "product-card-03.html");

    loadComponent("about", "about-text.html");

    appendComponent("contact", "contact-card-discord.html");
    appendComponent("contact", "contact-card-email.html");
});
