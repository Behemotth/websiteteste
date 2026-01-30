const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(btn => {
  btn.onclick = () => {
    sections.forEach(s => s.classList.remove("active"));
    document.getElementById(btn.dataset.view).classList.add("active");
  };
});
