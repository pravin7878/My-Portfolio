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
    Img: "./Image/netflix.png",

    Title: "Netflix-Clone",

    description: "Developed a Netflix Clone using HTML and CSS, focusing on responsiveness and incorporating features like image and video autoplay on the home screen.Currently, the clone primarily serves as a static representation without functional components.Proficiently utilized HTML5 and CSS3 to achieve the desired layout and styling " ,

    techstack: "Tech Stack:- HTML | CSS",
    github:"https://github.com/pravin7878/Netflix-clone",
    DeployLink:"https://netflix-clone-pk.netlify.app/"
  },
  {
    Img: "./Image/hellobrightline.png",
    Title: "hellobrightline-Clone",
    description: "Developed Hellobrightline-Clone in just 5 days.Replicated the Brightline website, a behavioral health solution for children and teens.What I Did:-Created a good-looking website that works on any device.Added images, videos, and text to make it visually appealing.Used HTML5 and CSS3 for the technical side.",
    techstack: "Tech Stack:- HTML | CSS",
    github:"https://github.com/pravin7878/hellobrightline.clone",
    DeployLink:"https://hellobrightline-clone-bypk.netlify.app/"

  }
]

let projectSec = document.querySelector('#Project>div')

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
 

  img.src = data.Img
  titel.textContent = data.Title
  description.textContent = data.description
  techstack.textContent = data.techstack
  githubbtn.innerText = "Git Repo";
  liveLinkbtn.innerText = "Live Link"
githubbtn.setAttribute("href",data.github)
liveLinkbtn.setAttribute("href",data.DeployLink)
githubbtn.target="_blank"
liveLinkbtn.target="_blank"

  div.append(img, titel, description, techstack, btndiv)
  projectSec.append(div)
}


let getdata = () => {
  project.forEach((data) => {
    console.log(data)
    CreateprojectDiv(data)
  })
}
getdata()



