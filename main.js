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

const words = {
  programming: ["Python", "Javascript", "Go", "Java", "Kotlin", "PHP"],
  movies: [
    "Three Days of the Condor",
    "Kill Bill",
    "The Place Beyond the Pines",
    " Bang the Drum Slowly",
    "Shawshank Redemption",
    "The Longest Day",
    "Things to Do in Denver When You're Dead",
    "A Clockwork Orange",
  ],
  people: [
    "Robert De Niro",
    "Jack Nicholson",
    "Marlon Brando",
    " Denzel Washington",
    "Katharine Hepburn",
    "Humphrey Bogart",
    "Meryl Streep",
    "Daniel Day-Lewis",
  ],
  countries: [
    "Afghanistan",
    "Bolivia",
    "Dominica",
    "France",
    "Ghana",
    "Indonesia",
    "Indonesia",
  ],
};

let allKays = Object.keys(words);
let rendomPropNumber = Math.floor(Math.random() * allKays.length);
let rendomPropName = allKays[rendomPropNumber];
let rendomPropValue = words[rendomPropName];
let rendomValueNumber = Math.floor(Math.random() * rendomPropValue.length);
let rendomValueValue = rendomPropValue[rendomValueNumber];
document.querySelector(".game-info .category span").innerHTML = rendomPropName;
