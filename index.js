// Array of quotes
import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
hideFavoriteBtn(favoriteBtn);
favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

const generateBtn = document.getElementById('new-quote');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

export { favoriteBtn };
