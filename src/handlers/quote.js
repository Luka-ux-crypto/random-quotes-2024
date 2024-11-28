import quotes from '../data/quotes.js';
import { generateRandomInt } from '../utils.js';
import { handleFavorite } from './favorites.js';

let currentQuote = null;

function handleQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote - author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { displayQuote, choseRandomQuote, handleQuote, currentQuote };
