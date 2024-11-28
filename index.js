// Array of quotes
import { handleQuote } from './src/handlers/quote.js';

const generateBtn = document.getElementById('new-quote');
generateBtn.addEventListener('click', handleQuote);
