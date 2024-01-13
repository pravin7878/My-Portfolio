// const mobile_nav = document.querySelector(".mobile-navbar-btn");
// const nav_header = document.querySelector("#naivbar");

// let dextopbtndiv = document.getElementsByClassName('.dekstop-navbar-btn')

// const toggleNavbar = () => {
//   // alert("Plz Subscribe ");
//   nav_header.classList.toggle("active");
// };

// mobile_nav.addEventListener("click", () => toggleNavbar());

var menuDiv = document.querySelector('#menu')
let OpenMenuBtn = document.getElementById('open-menu')

let btnIcon = document.querySelector('.btnicon')

const BtnImg = {
  openmenu : "./Image/icons8-menu-50 (1).png",
  closemenu : "./Image/icons8-close-window-50.png"
}
// let mobileMenu = document.createElement('div')
const creatMobilemenu = ()=>{
let output = ``
output+=`
<a href="#Home">Home</a>
<a href="#About">About</a>
<a href="#Skills">Skills</a>
<a href="#Projects">Projects</a>
<a href="#Contact">Contact Us</a>
<a href="">Resume</a>
`
menuDiv.innerHTML = output

}



OpenMenuBtn.addEventListener('click',()=>{
  if(OpenMenuBtn.className=="active"){
 OpenMenuBtn.innerHTML = `<img src='${BtnImg.closemenu}' alt=""  class= "close-menu-btn">`
 OpenMenuBtn.classList.toggle('active')
menuDiv.classList.toggle('mobile-menu-div')
 creatMobilemenu()
  }
  else{
    OpenMenuBtn.innerHTML = `<img src="./Image/icons8-menu-50 (1).png" alt="open-menu" class= "open-menu-btn" >`
    OpenMenuBtn.classList.toggle('active')
    menuDiv.innerHTML = '';
    menuDiv.classList.toggle('mobile-menu-div')
  } 
   
  
})