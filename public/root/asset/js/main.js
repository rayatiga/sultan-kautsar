/* ===== Global ===== */
// Display location inside footer
let locationPath = document.getElementById('location')
locationPath.innerHTML = window.location.pathname
// Get preffered color scheme, local storage scheme, button scheme
let preferScheme = window.matchMedia('(prefers-color-scheme: light)').matches
let currentScheme = localStorage.getItem('scheme')
let nativeScheme = document.getElementById('native-scheme')
// Initial set scheme by user device theme
if (currentScheme == null && preferScheme) {
  currentScheme = 'light'
} else if (currentScheme == null && !preferScheme) {
  currentScheme = 'dark'
}
localStorage.setItem('scheme', currentScheme)
document.body.setAttribute('scheme', currentScheme)
nativeScheme.innerHTML = preferScheme == true ? 'light' : 'dark'
// Scheme switcher to light or dark triggered by clicking button
function switchScheme() {
  const toLight = () => {
    localStorage.setItem('scheme', 'light')
    document.body.setAttribute('scheme', 'light')
  }
  const toDark = () => {
    localStorage.setItem('scheme', 'dark')
    document.body.setAttribute('scheme', 'dark')
  }
  let currentScheme = localStorage.getItem('scheme')
  if (currentScheme == 'dark') {
    toLight()
  } else if (currentScheme == 'light') {
    toDark()
  } else {
    toLight()
  }
}
/* ===== Global ===== */

/* Other */
if (window.location.hostname == '127.0.0.1' || window.location.hostname == 'localhost') {
  console.warn(`Window hostname is ${window.location.hostname}. Developer navigation mode active.`)
  let navdev = document.getElementsByClassName('navigation-sitemap')[0]
  let navlist = {
    href: ['/404.html', '/index.html', '/link.html', '/sitemap.html'],
    name: ['404', 'Home', 'Link', 'Sitemap'],
  }
  navdev.innerHTML = `<!-- Developer navigation by main.js -->`
  let count = 0
  for (let i = 0; i < navlist.href.length; i++) {
    navdev.innerHTML += `<li><a href="${navlist.href[i]}">${navlist.name[i]}</a></li>`
    count++
  }
  navdev.innerHTML += `<li>(Count: ${count})</li>`
}
/* Other */