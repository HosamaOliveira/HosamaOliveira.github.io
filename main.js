const githubInfo  = { 
  gitHub: 'hosamaoliveira'
} 

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${githubInfo.gitHub}`

  fetch(url)
  .then(response =>response.json())
  .then(data => {
    userImage.src = data.avatar_url
    userName.textContent = data.name
    userBio.textContent = data.bio
    locat.textContent = data.location
  })
}

getGitHubProfileInfos()

// Animar todos os itens na tela que tem o atributo data-anime

const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.90

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

// var lastScroll = 0


// 			window.addEventListener('scroll', (e) => {
// 				if (window.scrollY - lastScroll > 150) {
// 					lastScroll = window.scrollY
// 					alert('rolou mais que 150 pixels!')
// 				}
// 			})