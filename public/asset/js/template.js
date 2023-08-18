let nav = document.getElementsByTagName('nav')[0]
if (nav) {
  let active = ' active'
  let aria = ' aria-current="page"'
  let path = window.location.pathname
  nav.outerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                      <div class="container py-2">
                        <a class="navbar-brand fw-bold" href="/">Sultan Kautsar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link${path == '/' ? (state = active) : (state = '')}"${path == '/' ? (state = aria) : (state = '')} href="/">Home</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/achievement/' ? (state = active) : (state = '')}"${path == '/achievement/' ? (state = aria) : (state = '')} href="/achievement/">Achievement</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/link/' ? (state = active) : (state = '')}"${path == '/link/' ? (state = aria) : (state = '')} href="/link/">Link</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/contact/' ? (state = active) : (state = '')}"${path == '/contact/' ? (state = aria) : (state = '')} href="/contact/">Contact</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/project/' ? (state = active) : (state = '')}"${path == '/project/' ? (state = aria) : (state = '')} href="/project/">Project</a></li>
                            <li class="nav-item d-lg-none"><a class="nav-link${path == '/resume/' ? (state = active) : (state = '')}"${path == '/resume/' ? (state = aria) : (state = '')} href="/resume/">Resume</a></li>
                            <li class="nav-item d-none d-lg-block"><a href="/resume/" class="btn btn-dark border ms-2${path == '/resume/' ? (state = active) : (state = '')}"${path == '/resume/' ? (state = aria) : (state = '')}>Resume</a></li>
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
