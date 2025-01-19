const facts = {
  happy: ["Smiling boosts your mood!", "Happiness is contagious!"],
  curious: ["Bananas are berries!", "Octopuses have three hearts!"],
  motivated: ["Believe in yourself!", "Hard work always pays off!"],
};

const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
];

const triviaFacts = [
  "Did you know? The Eiffel Tower can be 15 cm taller during summer due to thermal expansion!",
  "Bananas are technically berries, but strawberries are not!",
  "A day on Venus is longer than a year on Venus!",
];

// Unlock Daily Fact
document.getElementById("unlockFact").addEventListener("click", () => {
  document.getElementById("dailyFact").innerText = 
    "Did you know? The Eiffel Tower can be 15 cm taller during summer due to thermal expansion!";
});

// Generate Mood Fact
document.getElementById("generateMoodFact").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const randomFact = facts[mood][Math.floor(Math.random() * facts[mood].length)];
  document.getElementById("moodFactDisplay").innerText = randomFact;
});

// Get Daily Quote
document.getElementById("getQuote").addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").innerText = randomQuote;
});

// Set Reminder
document.getElementById("setReminder").addEventListener("click", () => {
  const reminderTime = document.getElementById("reminderTime").value;
  if (reminderTime) {
    alert(`Reminder set for: ${reminderTime}`);
    localStorage.setItem("reminderTime", reminderTime);
  } else {
    alert("Please set a valid time.");
  }
});

// Generate Trivia Fact
document.getElementById("generateTrivia").addEventListener("click", () => {
  const randomTrivia = triviaFacts[Math.floor(Math.random() * triviaFacts.length)];
  document.getElementById("triviaFact").innerText = randomTrivia;
});