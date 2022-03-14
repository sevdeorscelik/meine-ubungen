// import { capitalizeFirstCharacter, getTodaysDate } from './tools.js';

import * as  tools from './tools.js';
import { flashcards } from './data/flashcards.js'

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
<p>${tools.getTodaysDate()}</p>
<div class="flashcards">
	${flashcards.map(flashcard => {
	return `
	<div class="flashcard">
        <div> ${flashcard.id}</div>
        <div class="front"><span class="category">${flashcard.category.toUpperCase()}</span>: ${tools.capitalizeFirstCharacter(flashcard.front)}</div>
		<div class="back">${flashcard.back}</div>	
	</div>	
		`;
}).join('')}
</div>
`;

