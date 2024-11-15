// Array of quotes
const quotes = [
  'The best way to predict the future is to invent it. – Alan Kay',
  'Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill',
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  'Act as if what you do makes a difference. It does. – William James',
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  'Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman',
];

// Function to display a random quote
function displayRandomQuote() {
  // Generate a random index based on the length of the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Get the quote at the random index
  const randomQuote = quotes[randomIndex];
  // Display the quote in the 'quote' paragraph element
  document.getElementById('quote').textContent = randomQuote;
}

// Add an event listener to the button
document
  .getElementById('new-quote')
  .addEventListener('click', displayRandomQuote);
