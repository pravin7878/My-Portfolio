const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("#naivbar");

let dextopbtndiv = document.getElementsByClassName('.dekstop-navbar-btn')

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

