/* ===== Global ===== */
// Location
let locationPath = document.getElementById('location')
locationPath.innerHTML = window.location.pathname
// Scheme
let preferScheme = window.matchMedia('(prefers-color-scheme: light)').matches
let currentScheme = localStorage.getItem('sultan-kautsar-scheme')
let nativeScheme = document.getElementById('native-scheme')
if (currentScheme == null && preferScheme) {
  currentScheme = 'light'
} else if (currentScheme == null && !preferScheme) {
  currentScheme = 'dark'
}
localStorage.setItem('sultan-kautsar-scheme', currentScheme)
document.body.setAttribute('sultan-kautsar-scheme', currentScheme)
nativeScheme.innerHTML = preferScheme == true ? 'light' : 'dark'
function switchScheme() {
  const toLight = () => {
    localStorage.setItem('sultan-kautsar-scheme', 'light')
    document.body.setAttribute('sultan-kautsar-scheme', 'light')
  }
  const toDark = () => {
    localStorage.setItem('sultan-kautsar-scheme', 'dark')
    document.body.setAttribute('sultan-kautsar-scheme', 'dark')
  }
  let currentScheme = localStorage.getItem('sultan-kautsar-scheme')
  if (currentScheme == 'dark') {
    toLight()
  } else if (currentScheme == 'light') {
    toDark()
  } else {
    toLight()
  }
}
/* ===== Global ===== */

/* ===== Other ===== */
// Localhost detector
function onLocal() {
  return window.location.hostname == '127.0.0.1'
}
// Developer navigation
if (onLocal()) {
  console.warn(`Window hostname is ${window.location.hostname}. Developer navigation mode active.`)
  let navdev = document.getElementsByClassName('navigation-sitemap')[0]
  let navlist = {
    href: ['/404.html', '/index.html', '/link.html', '/sitemap.html'],
    name: ['404', 'Index', 'Link', 'Sitemap'],
  }
  let count = 0
  navdev.innerHTML = ''
  for (let i = 0; i < navlist.href.length; i++) {
    navdev.innerHTML += `<li><a href="${navlist.href[i]}">${navlist.name[i]}</a></li>`
    count++
  }
  navdev.innerHTML += `<li>(Count: ${count})</li>`
}
/* ===== Other ===== */
