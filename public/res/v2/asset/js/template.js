let nav = document.getElementsByTagName('nav')[0]
if (nav) {
  let active = ' active'
  let aria = ' aria-current="page"'
  let path = window.location.pathname
  nav.outerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                      <div class="container py-2">
                        <a class="navbar-brand fw-bold" href="/res/v2/">Sultan Kautsar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link${path == '/res/v2/' ? (state = active) : (state = '')}"${path == '/res/v2/' ? (state = aria) : (state = '')} href="/res/v2/">Home</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/res/v2/achievement/' ? (state = active) : (state = '')}"${path == '/res/v2/achievement/' ? (state = aria) : (state = '')} href="/res/v2/achievement/">Achievement</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/res/v2/link/' ? (state = active) : (state = '')}"${path == '/res/v2/link/' ? (state = aria) : (state = '')} href="/res/v2/link/">Link</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/res/v2/contact/' ? (state = active) : (state = '')}"${path == '/res/v2/contact/' ? (state = aria) : (state = '')} href="/res/v2/contact/">Contact</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/res/v2/project/' ? (state = active) : (state = '')}"${path == '/res/v2/project/' ? (state = aria) : (state = '')} href="/res/v2/project/">Project</a></li>
                            <li class="nav-item d-lg-none"><a class="nav-link${path == '/res/v2/resume/' ? (state = active) : (state = '')}"${path == '/res/v2/resume/' ? (state = aria) : (state = '')} href="/res/v2/resume/">Resume</a></li>
                            <li class="nav-item d-none d-lg-block"><a href="/res/v2/resume/" class="btn btn-dark border ms-2${path == '/res/v2/resume/' ? (state = active) : (state = '')}"${path == '/res/v2/resume/' ? (state = aria) : (state = '')}>Resume</a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>`
}
let footer = document.getElementsByTagName('footer')[0]
if (footer) {
  footer.outerHTML = `<footer>
                        <div class="d-flex justify-content-center align-items-center bg-body border-top h-73px">
                          <p class="text-center m-0">Copyright © Sultan Kautsar 2023</p>
                        </div>
                      </footer>`
}
