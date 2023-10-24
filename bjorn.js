// The keys and notes variables store the piano keys
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "high-c-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
];

const notes = [];

keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

// Function to change the background color of keys when pressed
function keyPlay(event) {
  event.target.style.backgroundColor = "purple";
}

// Function to return the background color of keys to default
function keyReturn(event) {
  event.target.style.backgroundColor = "";
}

// Function to assign event handlers for the keys
function assignEventHandlers(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}

// Loop through the notes array and assign event handlers
notes.forEach(assignEventHandlers);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// Hide progress buttons except the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Event handler for the first progress button
nextOne.onclick = function () {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById("word-five").innerHTML = "D";
  document.getElementById("word-six").innerHTML = "C";
};

// Event handler for the second progress button
nextTwo.onclick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  lastLyric.style.display = "inline-block";
  document.getElementById("word-six").innerHTML = "FRI-";
};

// Event handler for the third progress button
nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("word-three").innerHTML = "BIRTH-";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("word-six").innerHTML = "YOU!";
  document.getElementById("letter-note-one").innerHTML = "F";
  document.getElementById("letter-note-two").innerHTML = "F";
  document.getElementById("letter-note-three").innerHTML = "E";
  document.getElementById("letter-note-four").innerHTML = "C";
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";
};

// Event handler for the startOver button (already provided in the original code)
startOver.onclick = function () {
  // Reset the lyrics and notes to the initial state
};
