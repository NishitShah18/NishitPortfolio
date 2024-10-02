function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function filterProjects(category, button) {
  const projects = document.querySelectorAll(".details-container");

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".filter-buttons .project-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add active class to the clicked button
  button.classList.add("active");

  // Show/hide projects based on selected category
  projects.forEach((project) => {
    if (category === "all") {
      project.style.display = "block";
    } else {
      const isCategoryMatch =
        project.getAttribute("data-category") === category;
      const isSkillsCategory =
        project.getAttribute("data-category") === "skills";
      project.style.display =
        isCategoryMatch || isSkillsCategory ? "block" : "none"; // Show if it matches or if it's a skills category
    }
  });
}
