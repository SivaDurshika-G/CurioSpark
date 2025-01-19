const facts = {
  happy: ["Smiling boosts your mood!", "Happiness is contagious!"],
  curious: ["Bananas are berries!", "Octopuses have three hearts!"],
  motivated: ["Believe in yourself!", "Hard work always pays off!"],
};

document.getElementById("unlockFact").addEventListener("click", () => {
  document.getElementById("dailyFact").innerText =
    "Did you know? The Eiffel Tower can be 15 cm taller during summer due to thermal expansion!";
});

document.getElementById("generateMoodFact").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  console.log("Mood selected:", mood); // Debugging line
  const randomFact =
    facts[mood][Math.floor(Math.random() * facts[mood].length)];
  console.log("Random Fact:", randomFact); // Debugging line
  document.getElementById("moodFactDisplay").innerText = randomFact;
});