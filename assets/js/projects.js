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

// projects
const projectsContentBody = document.querySelector(".projects-content-body");

const projectsJson = [
  {
    name: "Random Number Generator",
    description:
      "A random number generator that generates random numbers between 1 and 100.",
    url: "https://github.com/ItzNesbroDev/random-number-generator",
    image:
      "https://media.discordapp.net/attachments/969816208432062564/972842280127971338/random-number-generator.png",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Random Password Generator",
    description: "A random password generator that generates random passwords.",
    url: "https://github.com/ItzNesbroDev/random-password-generator",
    image:
      "https://media.discordapp.net/attachments/969816208432062564/972842279788216320/random-password-generator.png",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

function createProjects() {
  projectsJson.forEach((project) => {
    projectsContentBody.innerHTML += `
      <img src="${project.image}" alt="${
      project.name
    }" class="projects-content-body-image">
      <div class="projects-content-body-title">
        <h2>${project.name}</h2>
      </div>
      <div class="projects-content-body-description">
        <p>${project.description}</p>
      </div>
      <div class="projects-content-body-tags">
        <p>${project.technologies.join(", ")}</p>
      </div>
      <div class="projects-content-body-link">
      <a href="${project.url}" target="_blank">Github Repo</a>
      </div>
    `;
  });
}
createProjects();
// end projects
