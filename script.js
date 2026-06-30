/* ================= SMOOTH SCROLL ================= */

// Makes nav links scroll smoothly instead of jumping
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ================= FADE IN ON SCROLL ================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

/* ================= SIMPLE DARK MODE TOGGLE (OPTIONAL) ================= */

const toggle = document.createElement("button");

toggle.innerText = "Dark Mode";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
toggle.style.padding = "10px";
toggle.style.border = "none";
toggle.style.borderRadius = "8px";
toggle.style.cursor = "pointer";
toggle.style.background = "#2563eb";
toggle.style.color = "white";

document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});