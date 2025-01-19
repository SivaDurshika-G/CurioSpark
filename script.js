const facts = {
  happy: ["😃 Smiling boosts your mood! ✨", "🤩 Happiness is contagious! 🌝", "Smiling is contagious!" 😄😊,
Smiling can make others smile, spreading happiness,

"Laughter reduces stress." 😂🧘‍♀️,
Laughing helps lower stress hormones, making you feel more relaxed,

"Gratitude boosts your mood." 🙏💖,
Being thankful increases happiness and makes your brain feel better,

"Kindness makes you feel happier." 🤗💐,
Doing something nice for someone else increases your own joy,

"Exercise releases endorphins." 🏃‍♂️💪,
Physical activity is a natural way to boost your mood with happy chemicals,

"Music lifts your spirits." 🎶🎧,
Listening to your favorite tunes can elevate your mood and energy,

"Helping others makes you feel good." 💖🙋‍♀️,
Acts of kindness are a natural way to boost happiness,

"A good night's sleep is essential." 😴🛏️,
Getting enough rest improves mental clarity and happiness,

"Spending time with loved ones." 👨‍👩‍👧‍👦💖,
Being around family and friends boosts your sense of belonging and joy,

"Sunlight increases serotonin." 🌞😊,
Exposure to sunlight boosts your mood by enhancing serotonin levels,

"Chocolate can make you happy." 🍫😋,
Eating chocolate triggers the release of endorphins, your body's natural "feel-good" chemicals,

"Positive thinking leads to a better mood." 🌈✨,
Focusing on the positive can improve your outlook and boost happiness,

"Laughter is the best medicine." 🤣💊,
Laughing not only makes you happy but has healing effects on the body,

"Hugs reduce stress." 🤗💖,
Hugging releases oxytocin, a hormone that makes you feel calm and happy,

"You’re capable of creating your own happiness." 🌟💪,
Taking charge of your mindset can help you feel more in control and positive,

"The power of nature." 🌳🌻,
Spending time outside boosts mental health and can lift your spirits,

"A compliment can brighten someone's day." 🌸💬,
Giving or receiving compliments makes both people feel happy,

"Pets bring unconditional joy." 🐶🐱,
Spending time with pets can make you feel loved and content,

"You deserve to have fun!" 🎉😄,
Engaging in fun activities boosts overall happiness and well-being,

"Laughing at yourself is a great way to stay happy." 😆🙃,
Don't take yourself too seriously! Self-humor can lighten the mood,

"Adventure and travel can refresh your mind." ✈️🌍,
Exploring new places or trying new things brings joy and excitement,

"Dancing releases joy!" 💃🎶,
Even a few minutes of dancing can elevate your mood instantly,

"You are amazing just as you are." 🌟💫,
Remind yourself that you're unique and valuable, always deserving of happiness,
],
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
