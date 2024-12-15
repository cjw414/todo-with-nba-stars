const quotes = [
  { quote: "Hard work pays off.", player: "Michael Jordan" },
  { quote: "You miss 100% of the shots you don’t take.", player: "Wayne Gretzky" },
  { quote: "I’ve failed over and over again in my life. And that is why I succeed.", player: "Michael Jordan" },
  { quote: "Champions keep playing until they get it right.", player: "Billie Jean King" },
  { quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice.", player: "Pele" },
  { quote: "The strength of the team is each individual member.", player: "Phil Jackson" },
  { quote: "Don’t ever give up on your dreams.", player: "Kobe Bryant" },
  { quote: "Excellence is not a singular act but a habit.", player: "Shaquille O'Neal" },
  { quote: "Every day is a new opportunity to prove yourself.", player: "Giannis Antetokounmpo" },
  { quote: "If you quit once, it becomes a habit. Never quit!", player: "Michael Jordan" },
];


const quote = document.querySelector("#quote span:first-child");
const player = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
player.innerText = todaysQuote.player;
