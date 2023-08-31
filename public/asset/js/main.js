/* ===== Global ===== */
// Display title and subtitle inside header
document.getElementById('header').outerHTML = `<h1>Sultan Kautsar</h1>
                                               <p>Founder at Rayatiga, Business & Technology Enthusiast</p>`
// Display navigation inside footer
document.getElementById('navigation-sitemap').outerHTML = `<p>Navigation & Sitemap</p>
                                                           <ul class="navigation-sitemap">
                                                             <li><a href="/" title="Go to home page">Home</a></li>
                                                             <li><a href="/link.html" title="Go to link page">Link</a></li>
                                                             <li><a href="/sitemap.html" title="Go to sitemap page">Sitemap</a></li>
                                                           </ul>`
// Display pathname location inside footer
document.getElementById('location').outerHTML = `<p>Location: ${window.location.pathname}</p>`
// Display scheme inside footern
document.getElementById('scheme').outerHTML = `<p>Your native theme is <span id="native-scheme"></span>. Switch scheme to <span onclick="switchScheme()" class="scheme"></span>.</p>`
// Display copyright inside footer
document.getElementById('copyright').outerHTML = `<p class="cr">Copyright &copy; 2020-2023 Sultan Kautsar. All Rights Reserved.</p>`
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
