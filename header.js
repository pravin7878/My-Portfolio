var menuDiv = document.querySelector('.dekstop-navbar-btn')
let mobileMenutogal = document.querySelector(".mobile-navbar-btn")

let OpenMenuBtn = document.getElementById('open-menu')

let btnIcon = document.querySelector('.btnicon')


const BtnImg = {
  closemenu: "./Image/icons8-close-window-50.png"
}
console.log(BtnImg.closemenu);
var w = document.documentElement.clientWidth || window.innerWidth;


const hendelclick = () => {
  if (w <= 600) {
    OpenMenuBtn.innerHTML = `<img src="./Image/icons8-menu-50 (1).png" alt="open-menu" class= "open-menu-btn" >`
    OpenMenuBtn.classList.toggle('active')
    menuDiv.classList.toggle('showhide')
    menuDiv.style.display = "none"
  }
}


OpenMenuBtn.addEventListener('click', () => {
  if (OpenMenuBtn.className == "active") {
    OpenMenuBtn.innerHTML = `<img src='${BtnImg.closemenu}' alt=""  class= "close-menu-btn">`
    OpenMenuBtn.classList.toggle('active')
    menuDiv.style.display = "flex"
  }
  else {
    OpenMenuBtn.innerHTML = `<img src="./Image/icons8-menu-50 (1).png" alt="open-menu" class= "open-menu-btn" >`
    OpenMenuBtn.classList.toggle('active')
    menuDiv.classList.toggle('showhide')
    menuDiv.style.display = "none"
  }
})


let resume = document.querySelectorAll('#resumebtn')
console.log(resume)
resume.forEach((btn) => {
  btn.addEventListener('click', () => {
    {
      console.log("resume");
      window.open('https://drive.google.com/file/d/1L3ltXuqM1okygfvTCbJZSuZSOlD7N8qh/view?usp=sharing', "_blank")
    }
  })
})





let project = [
  {
    Img: "./Image/nyka-clone-img.png",
    Title: "Nykaa Clone",
    description: "I developed a responsive UI with Chakra UI for a seamless experience, managed routing with React Router DOM for smooth navigation, and used the Context API for efficient state management. I integrated Firebase Authentication for secure login, implemented product browsing and cart features, and deployed the app on Netlify for optimized performance.",
    techstack: "Tech Stack:- React | JavaScript | HTML5 | CSS3",
    github: "https://github.com/pravin7878/Nykaa-Clone",
    DeployLink: "https://nyka-clone-by-pk.netlify.app/"
  },
  {
    Img: "./Image/relince-digital-img.png",
    Title: "Reliance digital Clone",
    description: "I developed reusable components for product listings, details, and cart pages, enhancing scalability. I implemented add-to-cart functionality with quantity controls to improve user interaction. By applying responsive design techniques, I ensured cross-browser compatibility and optimal performance. I conducted thorough testing and debugging, resulting in a stable and reliable web application. Additionally, I integrated frontend components with server-side APIs, ensuring smooth data flow and functionality.",
    techstack: "Tech Stack:- React | JavaScript | HTML5 | CSS3",
    github: "https://github.com/pravin7878/Reliancedigital-Clone-",
    DeployLink: "https://reliancedigital-clone.vercel.app"
  },
  // {
  //   Img: "./Image/netflix.png",

  //   Title: "Netflix-Clone",

  //   description: "Developed a Netflix Clone using HTML and CSS, focusing on responsiveness and incorporating features like image and video autoplay on the home screen.Currently, the clone primarily serves as a static representation without functional components.Proficiently utilized HTML5 and CSS3 to achieve the desired layout and styling ",

  //   techstack: "Tech Stack:- HTML | CSS",
  //   github: "https://github.com/pravin7878/Netflix-clone",
  //   DeployLink: "https://netflix-clone-pk.netlify.app/"
  // },
  // {
  //   Img: "./Image/hellobrightline.png",
  //   Title: "hellobrightline-Clone",
  //   description: "Developed Hellobrightline-Clone in just 5 days.Replicated the Brightline website, a behavioral health solution for children and teens.What I Did:-Created a good-looking website that works on any device.Added images, videos, and text to make it visually appealing.Used HTML5 and CSS3 for the technical side.",
  //   techstack: "Tech Stack:- HTML | CSS",
  //   github: "https://github.com/pravin7878/hellobrightline.clone",
  //   DeployLink: "https://hellobrightline-clone-bypk.netlify.app/"

  // }
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
  githubbtn.setAttribute("href", data.github)
  liveLinkbtn.setAttribute("href", data.DeployLink)
  githubbtn.target = "_blank"
  liveLinkbtn.target = "_blank"

  div.append(img, titel, description, techstack, btndiv)
  projectSec.append(div)
}


let getdata = () => {
  project.forEach((data) => {
    CreateprojectDiv(data)
  })
}
getdata()



