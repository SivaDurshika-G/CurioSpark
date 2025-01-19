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
  } else {
    alert("Please set a valid time.");
  }
});

// Save Favorite Facts
let favoriteFacts = []; // Store the facts temporarily in the current session

document.getElementById("saveFavoriteFact").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const randomFact =
    facts[mood][Math.floor(Math.random() * facts[mood].length)];
  
  // Add the new fact to the temporary array
  favoriteFacts.push(randomFact);
  
  // Display the updated list of favorite facts in the favoritesList
  const favoritesList = document.getElementById("favoritesList");
  favoritesList.innerHTML = ''; // Clear current list before updating
  favoriteFacts.forEach(fact => {
    favoritesList.innerHTML += `<p>${fact}</p>`;
  });
});

// Reset the favorites list on page load (no persistence, just session-based)
window.addEventListener("load", () => {
  const favoritesList = document.getElementById("favoritesList");
  favoritesList.innerHTML = '';  // Reset the list on page reload
});