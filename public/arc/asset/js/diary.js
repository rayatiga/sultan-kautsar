const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const paramContent = params.get("r");

const intro = document.getElementById("intro");
const about = document.getElementById("about");
const result = document.getElementById("result");
const aboutPick = document.getElementById("about-pick");
const quote = document.getElementById("quote");
const dimmed = document.getElementById("dimmed");
const character = document.getElementById("character");

if (params.has("r")) {
  about.style.display = "none";
  intro.style.opacity = 0.25;
  dimmed.style.opacity = 0.25;
  character.style.opacity = 0.25;
  result.style.display = "flex";
  fetch("/arc/asset/json/diary.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (paramContent == data[i].about) {
          aboutPick.innerText = data[i].about;
          quote.innerText = data[i].content;
          break;
        }
        aboutPick.innerText = "...";
        quote.innerText = "Aku minta maaf, ini sedang dalam perancangan. Aku harap kamu baik-baik saja.";
      }
    });
} else {
  about.style.display = "flex";
  intro.style.opacity = 1;
  dimmed.style.opacity = 1;
  character.style.opacity = 1;
  result.style.display = "none";
}
