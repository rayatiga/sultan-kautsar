// Achievement data
fetch('/asset/json/achievement.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    let html = document.getElementById('achievement-data')
    for (let i = 0; i < data.length; i++) {
      html.innerHTML += `
        <div class="col">
        <div class="card h-100">
        <div class="card-header">
        <span class="badge bg-secondary fw-normal">${data[i].tag[0]}</span>
        <span class="badge bg-secondary fw-normal">${data[i].tag[1]}</span>
        <span class="badge bg-secondary fw-normal">${data[i].tag[2]}</span>
        </div>
        <div class="card-body">
        <h5 class="card-title">${data[i].title}</h5>
        <p class="card-text">${data[i].description}</p>
        </div>
        <div class="card-footer">
        <a class="text-body-secondary small text-decoration-none" href="${data[i].link}" target="_blank" ${data[i].link.includes('http') ? 'rel="nofollow noindex noopener"' : ''}>Link to certificate <i class="bi-box-arrow-up-right"></i></a>
        </div>
        </div>
        </div>
        `
    }
  })
  .catch((err) => {
    console.log(err)
  })

// UIUX data
fetch('/asset/json/uiux.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    let html = document.getElementById('uiux-data')
    for (let i = 0; i < data.length; i++) {
      html.innerHTML += `
        <div class="col">
        <div class="card h-100">
        <div class="card-header">
        <span class="badge bg-secondary fw-normal">${data[i].tag[0]}</span>
        <span class="badge bg-secondary fw-normal">${data[i].tag[1]}</span>
        <span class="badge bg-secondary fw-normal">${data[i].tag[2]}</span>
        </div>
        <img src="${data[i].image}" class="card-img rounded-0 sultan-kautsar-img-project-uiux" alt="${data[i].title}" />
        <div class="card-body">
        <h5 class="card-title">${data[i].title}</h5>
        <p class="card-text">${data[i].description}</p>
        </div>
        <div class="card-footer">
        <a class="text-body-secondary small text-decoration-none" href="${data[i].link}" target="_blank" ${data[i].link.includes('http') ? 'rel="nofollow noindex noopener"' : ''}>Link to project <i class="bi-box-arrow-up-right"></i></a>
        </div>
        </div>
        </div>
        `
    }
  })

// Website data
fetch('/asset/json/website.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    let html = document.getElementById('website-data')
    for (let i = 0; i < data.length; i++) {
      html.innerHTML += `
        <div class="col">
        <div class="card h-100">
        <div class="card-header">
        <span class="badge bg-secondary fw-normal">${data[i].tag[0]}</span>
        <span class="badge bg-secondary fw-normal">${data[i].tag[1]}</span>
        <span class="badge bg-secondary fw-normal">${data[i].tag[2]}</span>
        </div>
        <img src="${data[i].image}" class="card-img rounded-0 sultan-kautsar-img-project-website" alt="${data[i].title}" />
        <div class="card-body">
        <h5 class="card-title">${data[i].title}</h5>
        <p class="card-text">${data[i].description}</p>
        </div>
        <div class="card-footer">
        <a class="text-body-secondary small text-decoration-none" href="${data[i].link}" target="_blank" ${data[i].link.includes('http') ? 'rel="nofollow noindex noopener"' : ''}>Link to project <i class="bi-box-arrow-up-right"></i></a>
        </div>
        </div>
        </div>
        `
    }
  })
  .catch((err) => {
    console.log(err)
  })
