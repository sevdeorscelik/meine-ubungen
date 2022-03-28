const h1Elem = document.querySelector('h1');
const rootElem = document.querySelector('#root');
const pageElems = document.querySelectorAll('ul.nav li')

h1Elem.style.backgroundColor = 'yellow';
/*
rootElem.innerHTML = `
<p>This is the Info</p>
`*/

rootElem.innerHTML = Array.from(pageElems).map(pageElem => {
    return pageElem.innerTex ;
});

/*
for ( let i= 0; i < pagesElems.length; i++) {
    pageElems[i].style.color = 'green';
}
*/

/*
pageElems.forEach(pageElem => {
    pageElem.style.color = 'red'
});
*/