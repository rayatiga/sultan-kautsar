/* ===== Global ===== */
// Skip to main content
document.getElementsByTagName('main')[0].setAttribute('id', 'main-content')
document.body.insertAdjacentHTML('afterbegin', `<a href="#main-content">Skip to main content</a>`)
// Navigation
let navigationHeaderFooter = document.querySelectorAll('.navigation')
let navigationList = `
<li><a href="/">Home</a></li>
<li><a href="/link.html">Link</a></li>`
let navigationListFull = `
<li><a href="/">Home</a></li>
<li><a href="/link.html">Link</a></li>
<li>&mdash;</li>
<li><a href="/sitemap.html">Sitemap</a></li>`
navigationHeaderFooter[0].outerHTML = navigationList
navigationHeaderFooter[1].outerHTML = navigationListFull
document.querySelectorAll('header ul li a').forEach((navigationListHeader) => {
  if (navigationListHeader.href == window.location.href || navigationListHeader.href == window.location.href + '.html') {
    navigationListHeader.setAttribute('aria-current', 'page')
  }
})
document.querySelectorAll('footer ul li a').forEach((navigationListFooter) => {
  if (navigationListFooter.href == window.location.href || navigationListFooter.href == window.location.href + '.html') {
    navigationListFooter.setAttribute('aria-current', 'page')
  }
})
// Location
let locationPath = document.getElementById('location')
locationPath.innerText = window.location.pathname
// Scheme
let schemePrefer = window.matchMedia('(prefers-color-scheme: light)').matches
let schemeCurrent = localStorage.getItem('sultan-kautsar-scheme')
let schemeNative = document.getElementById('native-scheme')
let schemeButton = document.getElementsByClassName('scheme')[0]
if (schemeCurrent == null && schemePrefer) {
  schemeCurrent = 'light'
  schemeButton.innerText = 'light'
} else if (schemeCurrent == null && !schemePrefer) {
  schemeCurrent = 'dark'
  schemeButton.innerText = 'dark'
}
localStorage.setItem('sultan-kautsar-scheme', schemeCurrent)
document.body.setAttribute('sultan-kautsar-scheme', schemeCurrent)
schemeNative.innerText = schemePrefer == true ? 'light' : 'dark'
schemeButton.innerText = schemeCurrent
function switchScheme() {
  const toLight = () => {
    localStorage.setItem('sultan-kautsar-scheme', 'light')
    document.body.setAttribute('sultan-kautsar-scheme', 'light')
    schemeButton.innerText = 'light'
  }
  const toDark = () => {
    localStorage.setItem('sultan-kautsar-scheme', 'dark')
    document.body.setAttribute('sultan-kautsar-scheme', 'dark')
    schemeButton.innerText = 'dark'
  }
  let schemeCurrent = localStorage.getItem('sultan-kautsar-scheme')
  if (schemeCurrent == 'dark') {
    toLight()
  } else if (schemeCurrent == 'light') {
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
/* ===== Other ===== */
