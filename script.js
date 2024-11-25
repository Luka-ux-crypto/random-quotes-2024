// Array of quotes
const quotes = [
  {
    quote: 'The best way to predict the future is to invent it',
    author: 'Alan Kay',
  },
  {
    quote: 'Life is 10% what happens to us and 90% how we react to it',
    author: 'Charles R. Swindoll',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    quote: "Believe you can and you're halfway there",
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going",
    author: 'Sam Levenson',
  },
  {
    quote:
      'Keep your face always toward the sunshine—and shadows will fall behind you',
    author: 'Walt Whitman',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote - author');
const generateBtn = document.getElementById('new-quote');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;

  //quoteElement.textContent = randomQuote.quote;
  //quoteAuthorElement.textContent = randomQuote.author;
}
generateBtn.addEventListener('click', generateRandomQuote);

// Add an event listener to the button
//document.getElementById('new-quote').addEventListener('click', displayRandomQuote);

/*
// Function to display a random quote
function displayRandomQuote() {
  // Generate a random index based on the length of the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteAuthorElement = document.getElementById('quote - author');
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  const randomQuote = quotes[randomIndex];

  //const quote = `<em>"${randomQuote.quote}"</em><br><span id="author">${randomQuote.author}</span>`;

  // Display the quote in the 'quote' paragraph element
  document.getElementById('quote').textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
}

// Add an event listener to the button
document
  .getElementById('new-quote')
  .addEventListener('click', displayRandomQuote);
  */
