const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const paramAbout = params.get("about");
const paramKind = params.get("kind");

const intro = document.getElementById("intro");
const epw = document.getElementById("epw");
const about = document.getElementById("about");
const kind = document.getElementById("kind");
const result = document.getElementById("result");
const aboutPick = document.getElementById("about-pick");
const aboutImage = document.getElementById("about-image");
const quote = document.getElementById("quote");
const dimmed = document.getElementById("dimmed");
const character = document.getElementById("character");

const spotify = document.getElementById("spotify");

const backBtn = document.getElementById("back");

if (params.has("about") && params.get("about") != "back") {
  aboutImage.style.display = "none";
  about.style.display = "none";
  intro.style.display = "none";
  epw.style.display = "none";
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
  epw.style.display = "flex";
  dimmed.style.display = "flex";
  character.style.display = "flex";
  result.style.display = "none";
}

if (params.get("kind") == "playlist" || params.get("about") == "playlist") {
  spotify.style.display = "flex";
} else {
  spotify.style.display = "none";
}

if (params.has("kind") && params.get("kind") != "back") {
  aboutImage.style.display = "block";
  about.style.display = "none";
  intro.style.display = "none";
  epw.style.display = "none";
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
          aboutImage.setAttribute("src", `/arc/asset/gif/${data[1].kindList[i].image}`);
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
  epw.style.display = "flex";
  dimmed.style.display = "flex";
  character.style.display = "flex";
  result.style.display = "none";
}

var countDownEDate = new Date("Jul 14, 2024 19:00:00").getTime();
const eCountdown = document.getElementById("eCountdown");

eCountdown.innerHTML = "Klik untuk melihat.";
eCountdown.addEventListener(
  "click",
  function () {
    var promptE = prompt("Masukkan pin!");
    // Hayoloh, pasti kamu nyari ini ya :P
    // Makasih loh, ya. Keponya sampe effort gini. Haha!
    // Enjoy aman :D
    if (promptE == "07142019") {
      eCountdownFunc();
    } else if (promptE == null || promptE == "") {
      alert("Mohon masukkan pin untuk melihat.\nRefresh halaman untuk memasukkan pin ulang.");
    } else {
      alert("Pin salah.\nRefresh halaman untuk memasukkan pin ulang.");
    }
  },
  { once: true }
);

function eCountdownFunc() {
  var xE = setInterval(function () {
    var nowE = new Date().getTime();
    var distanceE = countDownEDate - nowE;

    var dayE = Math.floor(distanceE / (1000 * 60 * 60 * 24));
    var hourE = Math.floor((distanceE % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuteE = Math.floor((distanceE % (1000 * 60 * 60)) / (1000 * 60));
    var secondE = Math.floor((distanceE % (1000 * 60)) / 1000);

    eCountdown.innerHTML = dayE + " hari " + hourE + " jam " + minuteE + " menit " + secondE + " detik.";

    if (distanceE < 0) {
      clearInterval(xE);
      eCountdown.innerHTML = "Selesai. Congratulations if you're engaged! ✨";
    }
  }, 1000);
}

var countDownDateP = new Date("Jul 14, 2027 14:07:20").getTime();
const pCountdown = document.getElementById("pCountdown");

pCountdown.innerHTML = "Klik untuk melihat.";
pCountdown.addEventListener(
  "click",
  function () {
    var promptP = prompt("Masukkan pin!");
    // Hayoloh, pasti kamu nyari ini ya :P
    // Makasih loh, ya. Keponya sampe effort gini. Haha!
    // Enjoy aman :D
    if (promptP == "07142019") {
      pCountdownFunc();
    } else if (promptP == null || promptP == "") {
      alert("Mohon masukkan pin untuk melihat.\nRefresh halaman untuk memasukkan pin ulang.");
    } else {
      alert("Pin salah.\nRefresh halaman untuk memasukkan pin ulang.");
    }
  },
  { once: true }
);

function pCountdownFunc() {
  var xP = setInterval(function () {
    var nowP = new Date().getTime();
    var distanceP = countDownDateP - nowP;

    var dayP = Math.floor(distanceP / (1000 * 60 * 60 * 24));
    var hourP = Math.floor((distanceP % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuteP = Math.floor((distanceP % (1000 * 60 * 60)) / (1000 * 60));
    var secondP = Math.floor((distanceP % (1000 * 60)) / 1000);

    pCountdown.innerHTML = dayP + " hari " + hourP + " jam " + minuteP + " menit " + secondP + " detik.";

    if (distanceP < 0) {
      clearInterval(xP);
      pCountdown.innerHTML = "Selesai. Congratulations if you're proposaled! ✨";
    }
  }, 1000);
}
