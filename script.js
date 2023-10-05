const menuIcon = document.getElementById("menu-icon");
const navbarLinks = document.querySelector(".nav-child-right");
const navLinks = document.querySelectorAll(".navbar-links a"); // Select all links

menuIcon.addEventListener("click", function () {
  // Toggle the sidebar visibility
  navbarLinks.classList.toggle("show-sidebar");
  // Toggle the icon between "fa-bars" and "fa-circle-xmark" with a smooth animation
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-circle-xmark");
  } else {
    menuIcon.classList.remove("fa-circle-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

// Add an event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarLinks.classList.remove("show-sidebar");
    menuIcon.classList.remove("fa-circle-xmark");
    menuIcon.classList.add("fa-bars");
  });
});


