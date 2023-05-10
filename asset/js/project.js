// JavaScript Project

projectList = [
    {
        id: 1,
        image: "makglengcoffee.png",
        name: "Makgleng Coffee",
        desc: "Business and e-commerce website for UMK Makgleng Coffee Indonesia built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/makglengcoffe/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Business"],
    },
    {
        id: 2,
        image: "pawonkos799new.png",
        name: "Pawonkos799 (static)",
        desc: "Business and e-commerce website for UMK Pawonkos799 built with HTML CCS JS Bootstrap. Also registred (<a href='https://pawonkos799.com/res/hki-pawonkos799.pdf'>copyright docs</a>) by DJKI.",
        link: "https://pawonkos799.com/",
        // link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "Static", "E-commerce"],
    },
    {
        id: 3,
        image: "rayatigashop.png",
        name: "Rayatiga Shop",
        desc: "Fully fancy e-commerce website for Rayatiga Store built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatigashop/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "E-commerce"],
    },
    {
        id: 4,
        image: "pawonkos799.png",
        name: "Pawonkos799",
        desc: "Business and e-commerce website for UMK Pawonkos799 built with CMS WordPress with LAMP Stack. Also registred (<a href='https://pawonkos799.com/res/hki-pawonkos799.pdf'>copyright docs</a>) by DJKI.",
        //link: "https://project.sultankautsar.com/pawonkos799/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "E-commerce"],
    },
    {
        id: 5,
        image: "tunasjayamagelang.png",
        name: "Tunas Jaya Magelang",
        desc: "Business website for Tunas Jaya Magelang sales employee built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/tunasjayamagelang/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Business"],
    },
    {
        id: 6,
        image: "rayatigacareer.png",
        name: "Rayatiga Career",
        desc: "Job listing or career company website for Rayatiga Career built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatigacareer/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Job Listing"],
    },
    {
        id: 7,
        image: "rayatiganew.png",
        name: "Rayatiga (New)",
        desc: "Company profile website for Rayatiga Agency built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatiga/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Company"],
    },
    {
        id: 8,
        image: "rayatigasolution.png",
        name: "Rayatiga Solution",
        desc: "Blog for tutorial and problem solving tech problems for Rayatiga Solution built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatigasolution/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Blog"],
    },
    {
        id: 9,
        image: "rayatigacloud.png",
        name: "Rayatiga Cloud",
        desc: "Technology company profile for Rayatiga Cloud built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatigacloud/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Company"],
    },
    {
        id: 10,
        image: "rayatigatech.png",
        name: "Rayatiga Tech",
        desc: "Blog tips and tutorial webiste for Rayatiga Tech built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatigatech/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Blog"],
    },
    {
        id: 11,
        image: "rayatigaedu.png",
        name: "Rayatiga Edu",
        desc: "Educational and school website for SMP 1 Jekulo Kudus built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatigaedu/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Institiution"],
    },
    {
        id: 12,
        image: "rayatigastore.png",
        name: "Rayatiga Store",
        desc: "Fully e-commerce website for Rayatiga Store built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatigastore/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "E-commerce"],
    },
    {
        id: 13,
        image: "rayatiga2.png",
        name: "Rayatiga (old)",
        desc: "Technology agency profile for Rayatiga (2 - old) built with CMS WordPress with LAMP Stack.",
        //link: "https://project.sultankautsar.com/rayatiga2/",
        link: "https://sultankautsar.com/undev/",
        tag: ["LAMP", "WordPress", "Agency"],
    },
]

var project = document.getElementById("projectList")

if (project) {
    for (var i = 0; i < projectList.length; i++) {
        project.innerHTML += `<div class="col-lg-6 mb-4">
            <div class="card bg-light border-dark shadow h-100">
                <div class="card-header d-flex flex-wrap gap-1 small"><span class="${projectList[i].tag[0] == "LAMP" ? "text-bg-danger" : "text-bg-dark"} rounded-1 px-1">${projectList[i].tag[0]}</span><span class="${projectList[i].tag[1] == "WordPress" ? "text-bg-primary" : "text-bg-dark"} rounded-1 px-1">${projectList[i].tag[1]}</span><span class="${projectList[i].tag[2] == "E-commerce" || projectList[i].tag[2] == "Company" || projectList[i].tag[2] == "Agency" ? "text-bg-success" : "text-bg-warning"} rounded-1 px-1">${projectList[i].tag[2]}</span></div>
                <div class="card-body">
                    <a href="${projectList[i].link}" target="_blank" rel="nofollow noopener noreferrer" class="text-decoration-none link-dark"><img src="/asset/image/project/${projectList[i].image}" alt="${projectList[i].name} Website" srcset="" class="img-fluid border border-dark rounded-1 mb-2" /></a>
                    <h5 class="card-title fw-bold"><a href="${projectList[i].link}" target="_blank" rel="nofollow noopener noreferrer" class="text-decoration-none link-dark text-decoration-underline">${projectList[i].name}</a></h5>
                    <p class="card-text mb-2">${projectList[i].desc}</p>
                </div>
                <div class="card-footer">
                    <a href="${projectList[i].link}" target="_blank" rel="nofollow noopener noreferrer" class="text-decoration-none link-dark small float-end">Visit Website <i class="icon icon-box-arrow-up-right"></i></a>
                </div>
            </div>`
    }
}
