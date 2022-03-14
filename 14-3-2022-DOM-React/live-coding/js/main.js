// import { capitalizeFirstCharacter, getTodaysDate } from './tools.js';

import * as  tools from './tools.js';
import { flashcards } from './data/flashcards.js'

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
<p>${tools.capitalizeFirstCharacter('This is the title of the article')}</p>
<p>${tools.getTodaysDate()}</p>
<div classNem= "flashcards">
    ${flashcards.map(flashcards => {
        return '<div>nnn</div>';
    }).join('')}

</div>
` ;

