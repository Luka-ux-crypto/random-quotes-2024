// Array of quotes
import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote - author');
const generateBtn = document.getElementById('new-quote');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';
  toggleFavoriteBtn.style.display = 'inline-block';
  //quoteElement.textContent = randomQuote.quote;
  //quoteAuthorElement.textContent = randomQuote.author;
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
  <p>${currentQuote.quote}</p>
  <p class="author">${currentQuote.author}</p>`;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
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
