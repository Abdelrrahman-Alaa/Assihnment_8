var quotes = [
  {
    qoute:
      "If everybody minded their own business, the world would go around a great deal faster than it does.",
    author: "― Lewis Caroll, Alice in Wonderland",
  },

  {
    qoute:
      "Life is like a prism. What you see depends on how you turn the glass.",
    author: "― Jonathan Kellerman",
  },

  {
    qoute: "Don't let the muggles get you down.",
    author: "― J.K. Rowling, Harry Potter and the Prisoner of Azkaban",
  },

  {
    qoute: "sex is the consolation you have when you can't have love",
    author: "― Gabriel García Márquez",
  },

  {
    qoute:
      "How happy is the blameless vestal’s lot! The world forgetting, by the world forgot. Eternal sunshine of the spotless mind! Each pray’r accepted, and each wish resign’d",
    author: "― Alexander Pope, Eloisa to Abelard",
  },

  {
    qoute:
      "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful... that's what matters to me.",
    author: "― Steve Jobs",
  },

  {
    qoute:
      "The unhappiest people in this world, are those who care the most about what other people think.",
    author: "― C. JoyBell C.",
  },

  {
    qoute:
      "I didn’t go to religion to make me happy. I always knew a bottle of Port would do that. If you want a religion to make you feel really comfortable, I certainly don’t recommend Christianity.",
    author: "― C. S. Lewis",
  },

  {
    qoute:
      "Happiness is something that comes into our lives through doors we don't even remember leaving open.",
    author: "― Rose Wilder Lane",
  },

  {
    qoute:
      "People are capable, at any time in their lives, of doing what they dream of.",
    author: "― Paulo Coelho, The Alchemist",
  },
];

function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];

  document.getElementById("quoteText").innerText = randomQuote.qoute;
  document.getElementById("quoteAuthor").innerText = `${randomQuote.author}`;
}
