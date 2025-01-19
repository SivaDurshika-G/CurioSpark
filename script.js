const facts = {
  happy: ["😃 Smiling boosts your mood! ✨", "🤩 Happiness is contagious! 🌝"],
  curious: ["🍌 Bananas are berries, but strawberries aren't! 🍓", "🐙 Octopuses have three hearts and blue blood! 💙"],
  motivated: ["💪 Believe in yourself! ✨", "💪Hard work always pays off!✨"],
};

document.getElementById("unlockFact").addEventListener("click", () => {
  document.getElementById("dailyFact").innerText =
    "Did you know? The Eiffel Tower can be 15 cm taller during summer due to thermal expansion!";
});

document.getElementById("generateMoodFact").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const randomFact =
    facts[mood][Math.floor(Math.random() * facts[mood].length)];
  document.getElementById("moodFactDisplay").innerText = randomFact;
});