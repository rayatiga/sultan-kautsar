let projects = [
  {
    image: 'makglengcoffee.png',
    name: 'Makgleng Coffee',
    desc: 'Business and e-commerce website for UMK Makgleng Coffee Indonesia built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Business'],
  },
  {
    image: 'pawonkos799.png',
    name: 'Pawonkos799',
    desc: 'Business and e-commerce website for UMK Pawonkos799 built with CMS WordPress with LAMP Stack. Also registred (<a href="https://pawonkos799.com/res/hki-pawonkos799.pdf" class="link-magenta">copyright docs</a>) by DJKI.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'E-commerce'],
  },
  {
    image: 'rayatiga3.png',
    name: 'Rayatiga 3 (New Design)',
    desc: 'Company profile website templated by Astra for Rayatiga Agency built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Agency'],
  },
  {
    image: 'rayatigashop.png',
    name: 'Rayatiga Shop',
    desc: 'Fully fancy e-commerce website for Rayatiga Store built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'E-commerce'],
  },
  {
    image: 'pawonkos799new.png',
    name: 'Pawonkos799 (static)',
    desc: 'Business and e-commerce website for UMK Pawonkos799 built with HTML CCS JS Bootstrap. Also registred (<a href="https://pawonkos799.com/res/hki-pawonkos799.pdf" class="link-magenta">copyright docs</a>) by DJKI.',
    link: '#under-development',
    tag: ['LAMP', 'Static', 'E-commerce'],
  },
  {
    image: 'tunasjayamagelang.png',
    name: 'Tunas Jaya Magelang',
    desc: 'Business website for Tunas Jaya Magelang sales employee built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Business'],
  },
  {
    image: 'rayatigacareer.png',
    name: 'Rayatiga Career',
    desc: 'Job listing or career company website for Rayatiga Career built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Job Listing'],
  },
  {
    image: 'rayatiganew.png',
    name: 'Rayatiga (New)',
    desc: 'Company profile website for Rayatiga Agency built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Company'],
  },
  {
    image: 'rayatigasolution.png',
    name: 'Rayatiga Solution',
    desc: 'Blog for tutorial and problem solving tech problems for Rayatiga Solution built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Blog'],
  },
  {
    image: 'rayatigacloud.png',
    name: 'Rayatiga Cloud',
    desc: 'Technology company profile for Rayatiga Cloud built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Company'],
  },
  {
    image: 'rayatigatech.png',
    name: 'Rayatiga Tech',
    desc: 'Blog tips and tutorial webiste for Rayatiga Tech built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Blog'],
  },
  {
    image: 'rayatigaedu.png',
    name: 'Rayatiga Edu',
    desc: 'Educational and school website for SMP 1 Jekulo Kudus built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Institiution'],
  },
  {
    image: 'rayatigastore.png',
    name: 'Rayatiga Store',
    desc: 'Fully e-commerce website for Rayatiga Store built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'E-commerce'],
  },
  {
    image: 'rayatiga2.png',
    name: 'Rayatiga (old)',
    desc: 'Technology agency profile for Rayatiga (2 - old) built with CMS WordPress with LAMP Stack.',
    link: '#under-development',
    tag: ['LAMP', 'WordPress', 'Agency'],
  },
]
let project = document.getElementById('projectList')
if (project) {
  for (let i = 0; i < projects.length; i++) {
    project.innerHTML += `<div class="col-md-6 col-lg-6 mb-4">
                            <div class="card border h-100">
                              <div class="card-header d-flex flex-wrap gap-1 small"><span class="${projects[i].tag[0] == 'LAMP' ? 'text-bg-danger' : 'text-bg-dark'} rounded-1 px-1">${projects[i].tag[0]}</span><span class="${projects[i].tag[1] == 'WordPress' ? 'text-bg-primary' : 'text-bg-dark'} rounded-1 px-1">${projects[i].tag[1]}</span><span class="${projects[i].tag[2] == 'E-commerce' || projects[i].tag[2] == 'Company' || projects[i].tag[2] == 'Agency' ? 'text-bg-success' : 'text-bg-warning'} rounded-1 px-1">${projects[i].tag[2]}</span></div>
                              <div class="card-body">
                                <a onclick="alert('Sorry, ${projects[i].name} is not available right now.')" href="${projects[i].link}" rel="nofollow noopener noreferrer" class="text-decoration-none link-dark"><img src="/asset/media/project/${projects[i].image}" alt="${projects[i].name} Website" title="${projects[i].name}" srcset="" class="img-fluid border border-dark-subtle rounded-1 mb-2" loading="lazy" /></a>
                                  <h5 class="card-title fw-bold"><a onclick="alert('Sorry, ${projects[i].name} is not available right now.')" href="${projects[i].link}" rel="nofollow noopener noreferrer" class="text-decoration-none text-dark">${projects[i].name}</a></h5>
                                  <p class="card-text mb-2">${projects[i].desc}</p>
                              </div>
                              <div class="card-footer">
                                <a onclick="alert('Sorry, ${projects[i].name} is not available right now.')" href="${projects[i].link}" rel="nofollow noopener noreferrer" class="text-decoration-none text-dark small float-end">Visit Website <i class="bi bi-box-arrow-up-right"></i></a>
                              </div>
                            </div>`
  }
}
