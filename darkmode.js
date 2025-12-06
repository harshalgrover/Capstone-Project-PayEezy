// --------------- DARK MODE SYSTEM (GLOBAL) -----------------

// 1) Toggle button reference
const toggle = document.getElementById("modeToggle");

// 2) Apply saved theme (if any)
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.textContent = "☀️";
}

// 3) Toggle button click handler
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";
        }
    });
}
