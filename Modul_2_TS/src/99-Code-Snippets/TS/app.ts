const buttons = document.querySelector<HTMLDivElement>(".letter-btns");
const outputField = document.querySelector<HTMLDivElement>(".ausgabe");
const resetButton = document.querySelector(".reset");
const attemptsDisplay = document.querySelector(".attempts");
const highscoreDisplay = document.querySelector(".highscore");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖß";

const words = [
  "Mahl", "Brücke", "Druck", "Gefühl", "Scham", "Wärme", "Bruch", "Schweinehund", "Kino", "Speck",
  "Blitz", "Panik", "Treffen", "Fehler", "Freude", "Leid", "Zeit", "Wahl", "Traum", "Flucht",
  "Moment", "Karussell", "Wahnsinn", "Glück", "Chaos", "Schmerz", "Abenteuer", "Ruhe", "Hoffnung", "Licht"
];

const randomNumber = Math.floor(Math.random() * words.length);
const randomWord: string = words[randomNumber].toUpperCase();

let attempts = 10;
let highscore = localStorage.getItem("highscore") ? parseInt(localStorage.getItem("highscore")!) : 0;
let correctGuesses = 0; // Zählt die erratenen Buchstaben

console.log(randomWord);

// 🔊 Sound-Dateien laden
const correctSound = new Audio('/sounds/correct.mp3');
const wrongSound = new Audio('/sounds/wrong.mp3');
const winSound = new Audio('/sounds/win.mp3');
const loseSound = new Audio('/sounds/lose.mp3');

function ausgabeOne() {
  for (const buchstabe of randomWord) {
    if (outputField) {
      outputField.innerHTML += `<p class="item-${buchstabe.toUpperCase()}">__</p>`;
    }
  }

  for (const buchstabe of alphabet) {
    if (buttons) {
      buttons.innerHTML += `<button class="letter-btn" id="${buchstabe}">${buchstabe}</button>`;
    }
  }

  const allLetterBtns = document.querySelectorAll(".letter-btn") as NodeListOf<HTMLButtonElement>;

  allLetterBtns.forEach((letterBtn) => {
    letterBtn.addEventListener('click', () => {
      if (attempts > 0) {
        let knopf: string = letterBtn.id.toUpperCase();

        if (randomWord.includes(knopf)) {
          letterBtn.style.backgroundColor = "green";
          correctSound.play(); // ✅ Richtig geraten → Sound abspielen

          const zugriffe = document.querySelectorAll(`.item-${knopf}`);
          zugriffe.forEach((element) => {
            if (element.innerHTML === "__") {
              element.innerHTML = knopf;
              correctGuesses++;
            }
          });

          checkWin();
        } else {
          letterBtn.style.backgroundColor = "red";
          wrongSound.play(); // ❌ Falsch geraten → Sound abspielen
          attempts--;
          if (attempts <= 0) {
            alert("Game Over! Das Wort war: " + randomWord);
            loseSound.play(); // ☠️ Spiel verloren → Sound abspielen
            resetHighscore();
          }
        }
        updateAttempts();
      }
    });
  });
}

function updateAttempts() {
  if (attemptsDisplay) {
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
  }
}

function checkWin() {
  if (correctGuesses === randomWord.length) {
    alert("Glückwunsch! Du hast das Wort erraten!");
    winSound.play(); // 🎉 Gewinn → Sound abspielen
    updateHighscore();
  }
}

function updateHighscore() {
  highscore++;
  localStorage.setItem("highscore", highscore.toString());
  if (highscoreDisplay) {
    highscoreDisplay.textContent = `Highscore: ${highscore}`;
  }
}

function resetHighscore() {
  highscore = 0;
  localStorage.setItem("highscore", "0");
  if (highscoreDisplay) {
    highscoreDisplay.textContent = `Highscore: ${highscore}`;
  }
}

ausgabeOne();

if (resetButton) {
  resetButton.addEventListener("click", () => {
    location.reload();
  });
}

// Highscore beim Laden der Seite anzeigen
if (highscoreDisplay) {
  highscoreDisplay.textContent = `Highscore: ${highscore}`;
}

updateAttempts();



// Lautstärke anpassen & preload nutzen
correctSound.volume = 0.5;
wrongSound.volume = 0.5;
winSound.volume = 0.6;
loseSound.volume = 0.6;

correctSound.preload = "auto";
wrongSound.preload = "auto";
winSound.preload = "auto";
loseSound.preload = "auto";

// Sound erst nach User-Interaktion erlauben
document.addEventListener("click", () => {
  correctSound.play();
  correctSound.pause();
  correctSound.currentTime = 0;
}, { once: true });

function playSound(sound: HTMLAudioElement) {
  sound.currentTime = 0; // Zurücksetzen für mehrfaches Abspielen
  sound.play();
}

// Beispiel: Sound beim Erraten eines Buchstabens
document.getElementById("someButton")?.addEventListener("click", () => {
  playSound(correctSound);
});
