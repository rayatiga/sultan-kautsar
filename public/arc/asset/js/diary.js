const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const paramAbout = params.get("about");
const paramKind = params.get("kind");

const intro = document.getElementById("intro");
const about = document.getElementById("about");
const kind = document.getElementById("kind");
const result = document.getElementById("result");
const aboutPick = document.getElementById("about-pick");
const aboutImage = document.getElementById("about-image");
const quote = document.getElementById("quote");
const dimmed = document.getElementById("dimmed");
const character = document.getElementById("character");

const backBtn = document.getElementById("back");

if (params.has("about") && params.get("about") != "back") {
  aboutImage.style.display = "none";
  about.style.display = "none";
  intro.style.display = "none";
  dimmed.style.display = "none";
  character.style.display = "none";
  result.style.display = "flex";
  fetch("/arc/asset/json/diary.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data[0].aboutList.length; i++) {
        if (paramAbout == data[0].aboutList[i].about) {
          aboutPick.innerText = data[0].aboutList[i].about;
          quote.innerText = data[0].aboutList[i].content;
          break;
        }
        aboutPick.innerText = "...";
        quote.innerText = "Aku minta maaf, ini sedang dalam perancangan. Stay tune, ya!";
      }
    });
} else if (params.get("about") == "back") {
  about.style.display = "flex";
  about.scrollIntoView();
  intro.style.display = "flex";
  dimmed.style.display = "flex";
  character.style.display = "flex";
  result.style.display = "none";
}

if (params.has("kind") && params.get("kind") != "back") {
  aboutImage.style.display = "block";
  about.style.display = "none";
  intro.style.display = "none";
  dimmed.style.display = "none";
  character.style.display = "none";
  result.style.display = "flex";
  fetch("/arc/asset/json/diary.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data[1].kindList.length; i++) {
        if (paramKind == data[1].kindList[i].kind) {
          aboutPick.innerText = data[1].kindList[i].kind;
          quote.innerText = data[1].kindList[i].content;
          aboutImage.setAttribute("src", `/arc/asset/gif/${data[1].kindList[i].image}`)
          break;
        }
        aboutPick.innerText = "...";
        quote.innerText = "Aku minta maaf, ini sedang dalam perancangan. Stay tune, ya!";
      }
    });
  backBtn.setAttribute("href", "./diary.html?kind=back");
} else if (params.get("kind") == "back") {
  about.style.display = "flex";
  kind.scrollIntoView();
  intro.style.display = "flex";
  dimmed.style.display = "flex";
  character.style.display = "flex";
  result.style.display = "none";
}
