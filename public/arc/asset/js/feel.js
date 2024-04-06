const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const paramContent = params.get("r");

const feeling = document.getElementById("feeling");
const result = document.getElementById("result");
const feelPick = document.getElementById("feel-pick");
const quote = document.getElementById("quote");

if (params.has("r")) {
  feeling.style.display = "none";
  result.style.display = "flex";
  fetch("/arc/asset/json/feel.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (paramContent == data[i].feel) {
          document.title = `Aku merasa ${data[i].feel}`;
          feelPick.innerText = data[i].feel;
          quote.innerText = data[i].quote;
          break;
        }
        feelPick.innerText = "...";
        quote.innerText = "Aku minta maaf, ini sedang dalam perancangan. Aku harap kamu baik-baik saja.";
      }
    });
} else {
  feeling.style.display = "flex";
  result.style.display = "none";
}
