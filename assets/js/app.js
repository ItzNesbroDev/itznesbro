// navbar
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".navbar-links");

menu.addEventListener("click", () => {
  navLinks.style.display = "flex";
  navLinks.addEventListener("click", () => {
    navLinks.style.display = "none";
  });
});
// end navbar

// footer date
const date = document.querySelector(".date");
const year = new Date().getFullYear();
date.innerHTML = `${year}`;
// end footer
