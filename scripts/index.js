const btn = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
updateIconsAndButtons();
btn.style.display = "flex";

const defaultTheme = localStorage.getItem("theme");
if (defaultTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (defaultTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  let theme;
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
  updateIconsAndButtons();
});

function updateIconsAndButtons() {
  const theme = localStorage.getItem("theme");
  const isDark = theme === "dark" || (!theme && prefersDarkScheme.matches);
  btn.setAttribute("aria-checked", isDark ? "false" : "true");
  if (isDark) {
    document.querySelector("nav img").src = "assets/logo-darktheme.png";
    document.querySelector("footer a img").src = "assets/linkedin-black.png";
  } else {
    document.querySelector("nav img").src = "assets/logo.png";
    document.querySelector("footer a img").src = "assets/linkedin-white.png";
  }
}
