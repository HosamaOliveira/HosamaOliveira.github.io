var onMouse = false

document.addEventListener("mousemove", parallax)

function parallax(e) {  
  if(onMouse){
    this.querySelectorAll(".layer").forEach(layer => {
      const speed = layer.getAttribute("data-speed")

      const x = (window.innerWidth - e.pageX * speed)/100
      const y = (window.innerHeight - e.pageY * speed)/100
      
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      layer.style.transition = "all .1s"
    })
  }
}
// ---------------------------------------------
const githubInfo  = { 
  gitHub: 'hosamaoliveira'
} 

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${githubInfo.gitHub}`

  fetch(url)
  .then(response =>response.json())
  .then(data => {
    userName.textContent = data.name
    userImage.src = data.avatar_url
  })
}

getGitHubProfileInfos()

// Função para mostrar a idade correta na tela
let showAge = document.querySelector("#showAge")
let yearOfBirth = new Date(1993,12,23)

let data = new Date()
let fullDate  = new Date(data.getTime() - yearOfBirth.getTime())
let age = fullDate.getFullYear()-1970 

showAge.innerHTML = ` ${age}`


// Animar todos os itens na tela que tem o atributo data-anime

const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {
  
  if (window.scrollY > document.querySelector("header").offsetHeight) {
    moveUp.style.display = "flex"
    moveUp.style.flexDirection = "column"
  }else {
    moveUp.style.display = "none"
  }

  const windowTop = window.pageYOffset + window.innerHeight * 0.70

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate")
    } else {
      element.classList.remove("animate")
    }
  })
}

animeScroll()

window.addEventListener("scroll", () => {
  animeScroll()
})

// Função para rolar a página ao topo

function scrollToTop() {
  window.scrollTo({
    top: 0
  })
}

// Função para mostrar o botão para rolar ao topo

var altura = window.innerHeight
document.documentElement.clientHeight
document.body.clientHeight;


console.log(altura)

// Função para travar a rolagem do body ao ativar a rolagem X do #capsule

let bod = document.querySelector("body") 
let capsule = document.querySelector("#capsule")
let mouseIn = false

capsule.addEventListener("mouseenter", lockScrollY)
function lockScrollY() {
  mouseIn = true
}
capsule.addEventListener("mouseleave", unlockScrollY )
function unlockScrollY() {
  mouseIn = false
}

// Função para rolar o carousel com o scroll do mouse

document.querySelector("#scrollWheel").addEventListener("wheel", event => {
  var wi = capsule.offsetWidth
  if(event.deltaY > 0) {
    event.target.scrollBy(wi, 0)
  } else {
  event.target.scrollBy(-wi, 0)
  } 

  if(mouseIn){
    event.preventDefault()
    // return false    // Caso o event.preventDefault não funfe, tentar esse
  }
})
