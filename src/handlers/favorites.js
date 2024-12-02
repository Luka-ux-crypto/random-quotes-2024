import { favoriteBtn } from '../../index.js';

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  /*quote.isFavorite
    ? showFavoriteCard(quote, container)
    : hideFavoriteCard(quote.id);*/

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}
function hideFavoriteBtn(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
<p>${text}</p>
<p class="author">${author}</p>`;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id='${id}']`);
  if (card) {
    card.remove();
  }
}
export { handleFavorite, toggleFavorite, hideFavoriteBtn };
