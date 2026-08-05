function loadComponent(id, file) {
    fetch(`/src/components/${file}`)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "navbar.html");
    loadComponent("footer", "footer.html");
});
