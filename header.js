var menuDiv = document.querySelector('#menu')
let OpenMenuBtn = document.getElementById('open-menu')

let btnIcon = document.querySelector('.btnicon')

const BtnImg = {
  openmenu: "./Image/icons8-menu-50 (1).png",
  closemenu: "./Image/icons8-close-window-50.png"
}


const creatMobilemenu = () => {
  let output = ``
  output += `
<a href="#Home">Home</a>
<a href="#About">About</a>
<a href="#Skills">Skills</a>
<a href="#Projects">Projects</a>
<a href="#Contact">Contact Us</a>
<a href="">Resume</a>
`
  menuDiv.innerHTML = output

}



OpenMenuBtn.addEventListener('click', () => {
  if (OpenMenuBtn.className == "active") {
    OpenMenuBtn.innerHTML = `<img src='${BtnImg.closemenu}' alt=""  class= "close-menu-btn">`
    OpenMenuBtn.classList.toggle('active')
    menuDiv.classList.toggle('mobile-menu-div')
    creatMobilemenu()
  }
  else {
    OpenMenuBtn.innerHTML = `<img src="./Image/icons8-menu-50 (1).png" alt="open-menu" class= "open-menu-btn" >`
    OpenMenuBtn.classList.toggle('active')
    menuDiv.innerHTML = '';
    menuDiv.classList.toggle('mobile-menu-div')
  }
})


let project = [
  {
    Img: "https://media.istockphoto.com/id/866156168/photo/nature-b1.jpg?s=612x612&w=is&k=20&c=9kNWvgcKCMLgcwE-XC1my6neVwBdwJOIciAwxg3jJno=",

    Title: "Netflix Clone",

    description: "Developed a Netflix Clone using HTML and CSS, focusing on responsiveness and incorporating features like image and video autoplay on the home screen.Currently, the clone primarily serves as a static representation without functional components.Proficiently utilized HTML5 and CSS3 to achieve the desired layout and styling " ,

    techstack: " Tech Stack:- HTML | CSS",
    github:"google.com",
    DeployLink:""
  },
  {
    Img: "https://media.istockphoto.com/id/866156168/photo/nature-b1.jpg?s=612x612&w=is&k=20&c=9kNWvgcKCMLgcwE-XC1my6neVwBdwJOIciAwxg3jJno=",
    Title: "project 1",
    description: "this is my project",
    techstack: "html,css,js",
    github:"google.com",
    DeployLink:""

  }
]

let projectSec = document.querySelector('#Project>div')
// console.log(projectSec)


let CreateprojectDiv = (data) => {
  let div = document.createElement('div')
  let img = document.createElement('img')
  let titel = document.createElement('h1')
  let description = document.createElement('p')
  let techstack = document.createElement('h4')

  let btndiv = document.createElement('div')
  let githubbtn = document.createElement('a')
  let liveLinkbtn = document.createElement('a')
  btndiv.append(githubbtn, liveLinkbtn)
  // console.log(img);

  img.src = data.Img
  titel.textContent = data.Title
  description.textContent = data.description
  techstack.textContent = data.techstack
githubbtn.setAttribute("href",data.github)
liveLinkbtn.setAttribute("href",data.DeployLink)


  div.append(img, titel, description, techstack, btndiv)
  // return div
  projectSec.append(div)
}




let getdata = () => {
  project.forEach((data) => {
    console.log(data)
    CreateprojectDiv(data)
  })
}
getdata()
