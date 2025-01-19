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

// Unlock Daily Fact
document.getElementById("unlockFact").addEventListener("click", () => {
  document.getElementById("dailyFact").innerText =
    "Did you know? The Eiffel Tower can be 15 cm taller during summer due to thermal expansion!";
});

// Generate Mood Fact
document.getElementById("generateMoodFact").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const randomFact =
    facts[mood][Math.floor(Math.random() * facts[mood].length)];
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

// Save Favorite Facts
document.getElementById("saveFavoriteFact").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const randomFact =
    facts[mood][Math.floor(Math.random() * facts[mood].length)];
  let favorites = localStorage.getItem("favorites") || "";
  favorites += `<p>${randomFact}</p>`;
  localStorage.setItem("favorites", favorites);
  document.getElementById("favoritesList").innerHTML = favorites;
});

// Display Saved Favorites on page load
window.addEventListener("load", () => {
  const favorites = localStorage.getItem("favorites") || "";
  document.getElementById("favoritesList").innerHTML = favorites;
});