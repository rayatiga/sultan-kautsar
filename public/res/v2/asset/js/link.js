let links = [
  {
    url: 'https://rayatiga.com/',
    display: 'rayatiga.com/',
    tooltip: 'Go to Business Website',
    prefix: 'My business, Rayatiga',
  },
  {
    url: 'https://sultankautsar.com/',
    display: 'sultankautsar.com/',
    tooltip: 'This Portfolio Website',
    prefix: 'My portfolio, Website',
  },
  {
    url: 'https://github.com/bydzen/',
    display: 'github.com/bydzen/',
    tooltip: 'Go to GitHub Profile',
    prefix: 'My social media, GitHub',
  },
  {
    url: 'https://dribbble.com/bydzen/',
    display: 'dribbble.com/bydzen/',
    tooltip: 'Go to Dribbble Profile',
    prefix: 'My portfolio, Dribbble',
  },
  {
    url: 'https://instagram.com/bydzen/',
    display: 'instagram.com/bydzen/',
    tooltip: 'Go to Instagram Profile',
    prefix: 'My social media, Instagram',
  },
  {
    url: 'https://twitter.com/sultankautsar/',
    display: 'twitter.com/sultankautsar/',
    tooltip: 'Go to Twitter Profile',
    prefix: 'My social media, Twitter',
  },
  {
    url: 'https://linkedin.com/in/sultankautsar/',
    display: 'linkedin.com/in/sultankautsar/',
    tooltip: 'Go to LinkedIn Profile',
    prefix: 'My social media, LinkedIn',
  },
]

let link = document.getElementById('link')
for (let i = 0; i < links.length; i++) {
  link.innerHTML += `<li><span>${links[i].prefix} &mdash;</span> <a href="${links[i].url}" class="link-magenta" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="${links[i].tooltip}">${links[i].display}</a></li>`
}
