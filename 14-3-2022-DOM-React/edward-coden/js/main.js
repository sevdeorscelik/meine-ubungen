import * as tools from './tools.js';
import { flashcards } from './data/flashcards.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
	<p>${tools.getTodaysDate()}</p>
	<h2>Flashcards</h2>
	<div class="flashcards">
		${flashcards.map(flashcard => {
	return `
	<div class="flashcard">
		<div class="front"><span class="category">${flashcard.category.toUpperCase()}</span>: ${tools.capitalizeFirstCharacter(flashcard.front)}</div>
		<div class="back">${flashcard.back}</div>
	</div>	
			`;
}).join('')}	
	</div>
`;