const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.getElementById("nameInput");
const getHouseBtn = document.getElementById("getHouseBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const result = document.getElementById("result");
const trait = document.getElementById("trait");

let lastHouse = "";

function pickHouse(avoidHouse) {
  const pool = avoidHouse
    ? houses.filter(function (house) {
        return house !== avoidHouse;
      })
    : houses;

  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

function showHouseTrait(house) {
  if (house === "Gryffindor") {
    trait.textContent = "Known for bravery and courage.";
  } else if (house === "Hufflepuff") {
    trait.textContent = "Known for patience and loyalty.";
  } else if (house === "Ravenclaw") {
    trait.textContent = "Known for learning and curiosity.";
  } else if (house === "Slytherin") {
    trait.textContent = "Known for ambition and leadership.";
  }
}

function runGenerator(isRetry) {
  const name = nameInput.value.trim();

  if (name === "") {
    result.textContent = "Please enter your name first.";
    trait.textContent = "";
    return;
  }

  const chosenHouse = pickHouse(isRetry ? lastHouse : "");
  lastHouse = chosenHouse;

  result.textContent = name + " belongs in " + chosenHouse + "!";
  showHouseTrait(chosenHouse);
}

getHouseBtn.addEventListener("click", function () {
  runGenerator(false);
});

tryAgainBtn.addEventListener("click", function () {
  runGenerator(true);
});
