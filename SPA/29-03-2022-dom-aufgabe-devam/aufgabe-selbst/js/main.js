
const carElem = document.querySelector('#car')
const carTextElem = document.querySelector('.car-text')
const catTextElem = document.querySelector('.cat-text')
const catElem = document.querySelector('#cat')

carElem.addEventListener('dragstart', (e) => {
    
    e.dataTransfer.setData('car', carElem.id);
})

catElem.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('cat',catElem.id )
})
carTextElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})
catTextElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})

carTextElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('car')
    carTextElem.innerHTML = ''
    carTextElem.appendChild(document.getElementById(id))
    

    //carTextElem.style.backgroundColor = 'greenyellow'
 
})

catTextElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('cat')
    catTextElem.innerHTML = ''
    catTextElem.appendChild(document.getElementById(id))
    //carTextElem.style.backgroundColor = 'greenyellow'
   
    
    
})