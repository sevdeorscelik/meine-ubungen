import './style.css'


const text = '<div><strong>This text is important</strong> ajhfjsfgjsadgfjdshgfld <strong>This text is important</strong> jshgfljhgflsdf <strong>This text is important</strong></div>'
document.querySelector('#app').innerHTML = `
  <h1>Highlight Strong Tags!</h1>
  <div class = "text">${text}</div>
  <button class="btnChange">Change Color of Strong Tags</button>
  <br><hr><br>
  <div class='windowInfo'></div>
`
const btnChangeElem = document.querySelector('.btnChange')

btnChangeElem.addEventListener('click', () => {
  const strongElems = document.querySelectorAll('strong')
  strongElems.forEach(strongElem => {
    if(strongElem.style.color === 'black'){
      strongElem.style.color = 'red'
    }else if(strongElem.style.color === 'red') {
      strongElem.style.color = 'green'
    }else{
      strongElem.style.color = 'black'
    }
    
  })
  })


  window.onresize = () => {
    const windowInfoElem = document.querySelector('.windowInfo')
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight

    windowInfoElem.innerHTML = `width: ${w}px, height: ${h}px`
    windowInfoElem.style.border = 'solid 2px #333'
    windowInfoElem.style.padding = '10px'
    windowInfoElem.style.display = 'inline'
  }
 

