import './style.scss'
import flashcards from './data/flashcards.json';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <img src="./images/code.png"/>
  <div class="flashcards">
${flashcards.map(flashcard => {
	return `<div class="front">${flashcard.front}</div>
	<div class="back">${flashcard.back}</div>`
}).join('')}  
  </div>
`


