const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

let words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKays = Object.keys(words);
let rendomPropNumber = Math.floor(Math.random() * allKays.length);
let rendomPropName = allKays[rendomPropNumber];
let rendomPropValue = words[rendomPropName];
let rendomValueNumber = Math.floor(Math.random() * rendomPropValue.length);
let rendomValueValue = rendomPropValue[rendomValueNumber];
document.querySelector(".game-info .category span").innerHTML = rendomPropName;
let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(rendomValueValue);
lettersAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "with-space";
  }
  lettersGuessContainer.appendChild(emptySpan);
});
let guessSpans = document.querySelector(".letters-guess span");
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    let theChoosenWord = Array.from(rendomValueValue.toLowerCase());
    theChoosenWord.forEach((wordLetter, wordIndex) => {
      if (theClickedLetter == wordLetter) {
        console;
      }
    });
  }
});
