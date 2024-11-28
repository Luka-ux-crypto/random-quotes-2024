// Array of quotes
import quotes from './src/quotes.js';
import { generateRandomInt } from './src/utils.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from './src/favoritesHandler.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote - author');
const generateBtn = document.getElementById('new-quote');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  const randomQuote = quotes[randomIndex]; // Get the random quote object
  const { quote, author } = randomQuote;
  currentQuoteIndex = randomIndex;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = 'inline-block';
  //quoteElement.textContent = randomQuote.quote;
  //quoteAuthorElement.textContent = randomQuote.author;
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
generateRandomQuote();

// Либо с помощью if
/*if (toggleFavoriteBtn.textContent === 'Add to favorite') {
    toggleFavoriteBtn.textContent = 'Remove from favorite';
  } else {
    toggleFavoriteBtn.textContent = 'Add to favorite';
  }*/

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
