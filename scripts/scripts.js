//burger

const menuCheckbox = document.getElementById("checkbox_toggle");
const links = document.querySelectorAll(".menu a, .logo-container a");
const body = document.body;

links.forEach((link) => {
  link.addEventListener("click", () => {
    menuCheckbox.checked = false;
    body.style.overflow = "auto";
  });
});

menuCheckbox.addEventListener("change", () => {
  if (menuCheckbox.checked) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

//animation

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
