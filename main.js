let words = {
  programming: ["php", "JavaScript", "go", "SqlServer", "python", "Ruby"],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Ironman",
    "InterStellar",
    "Coco",
    "TheGodfather",
  ],
  people: [
    "johncena",
    "LionalMessi",
    "CristianoRonaldo",
    "Neymar",
    "AboMira",
    "Kareem",
    "TheLengend",
    "Masri",
    "Jammas",
  ],
  Countries: [
    "Palestine",
    "india",
    "Syria",
    "USA",
    "UAE",
    "UK",
    "Oman",
    "Egypt",
    "Lebanon",
    "Yemen",
  ],
};
let thedraw = document.querySelector(".the-draw");
let cnt = 0,
  cnt1 = 0;
let found = false;
let correct = new Audio("/Correct Answer Sound Effect _ NO COPYRIGHT .mp3");
let mistake = new Audio("/mistake.mp3");
let lose = new Audio("/lose.mp3");
get();
document.addEventListener("click", function (ele) {
  let length = document.querySelector(".letters-guess").children.length;
  if (ele.target.classList.contains("letter")) {
    let word = document.querySelectorAll(".letterguess span");
    word.forEach((e) => {
      if (e.textContent === ele.target.textContent) {
        e.classList.add("show");
        found = true;
        correct.play();
        cnt1++;
      }
    });
    if (!found) {
      cnt++;
      if (cnt === 1) {
        thedraw.classList.add("wrong1");
      } else if (cnt === 2) {
        thedraw.classList.add("wrong2");
      } else if (cnt === 3) {
        thedraw.classList.add("wrong3");
      } else if (cnt === 4) {
        thedraw.classList.add("wrong4");
      } else if (cnt === 5) {
        thedraw.classList.add("wrong5");
      } else if (cnt === 6) {
        thedraw.classList.add("wrong6");
      } else if (cnt === 7) {
        thedraw.classList.add("wrong7");
      } else if (cnt === 8) {
        thedraw.classList.add("wrong8");
        loser();
      }
      if (cnt < 8) {
        mistake.play();
      }
    }
    found = false;
  }
  checkwinner(length);
  ele.target.classList.add("shutdown");
});
function checkwinner(length) {
  if (cnt1 === length) {
    get();
    if (isNaN(window.localStorage.bestScore)) {
      window.localStorage.bestScore = "1";
    } else {
      window.localStorage.bestScore++;
      let best = document.querySelector(".best-score");
      best.innerHTML = `Best Score: ${window.localStorage.bestScore}`;
    }

    (cnt = 0), (cnt1 = 0);
    found = false;
  }
}
function get() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let lettersArray = [...letters.toUpperCase()];
  let lettersPlace = document.querySelector(".letters");
  lettersPlace.innerHTML = "";
  lettersArray.forEach((e) => {
    let letter = document.createElement("span");
    letter.textContent = e;
    letter.classList.add("letter");
    lettersPlace.appendChild(letter);
  });
  let arrRan = Object.keys(words);
  let ranProp = arrRan[Math.floor(Math.random() * arrRan.length)];
  let ranValue = words[ranProp];
  let ranWord = [...ranValue[Math.floor(Math.random() * ranValue.length)]];
  let category = document.querySelector(".category span");
  category.textContent = ranProp;
  let wordGuess = document.querySelector(".letters-guess");
  wordGuess.innerHTML = "";
  ranWord.forEach((e) => {
    let div = document.createElement("div");
    let letterg = document.createElement("span");
    div.className = "letterguess";
    letterg.textContent = e.toUpperCase();
    div.append(letterg);
    wordGuess.appendChild(div);
  });
  thedraw.className = "the-draw";
}
let winner = document.querySelector(".winner");
let re = document.querySelector(".replay");
re.onclick = () => {
  get();
  winner.classList.add("hide");
  winner.classList.remove("show");
};
function loser() {
  setTimeout(() => {
    winner.classList.remove("hide");
    winner.classList.add("show");
    lose.play();
    (cnt = 0), (cnt1 = 0);
    found = false;
  }, 1000);
}

if (+window.localStorage.bestScore > 0) {
  let best = document.querySelector(".best-score");
  best.innerHTML = `Best Score: ${window.localStorage.bestScore}`;
}
