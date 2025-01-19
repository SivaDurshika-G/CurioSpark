const facts = {
  happy: ["😃 Smiling boosts your mood! ✨", "🤩 Happiness is contagious! 🌝"],
  curious: ["🍌 Bananas are berries, but strawberries aren't! 🍓", "🐙 Octopuses have three hearts and blue blood! 💙"],
  motivated: ["💪 Believe in yourself! ✨", "💪Hard work always pays off!✨"],
  
};

document.getElementById("unlockFact").addEventListener("click", () => {
  document.getElementById("dailyFact").innerText =
    "🤔 Did you know? 🗼 The Eiffel Tower can be 15 cm taller during summer due to thermal expansion! 🌇";
});

document.getElementById("generateMoodFact").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const randomFact =
    facts[mood][Math.floor(Math.random() * facts[mood].length)];
  document.getElementById("moodFactDisplay").innerText = randomFact;
});
// JavaScript for Modal Interaction

// Get modal element
var thankYouModal = document.getElementById("thankYouModal");

// Get button to trigger modal
var startBtn = document.getElementById("startBtn");

// Get elements to close modal
var closeBtn = document.getElementById("closeBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the "Start Exploring" button, show the modal
startBtn.onclick = function() {
    thankYouModal.style.display = "block";
}

// Close the modal when the user clicks the 'x' (span) button
span.onclick = function() {
    thankYouModal.style.display = "none";
}

// Close the modal when the user clicks the 'Close' button
closeBtn.onclick = function() {
    thankYouModal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == thankYouModal) {
        thankYouModal.style.display = "none";
    }
}