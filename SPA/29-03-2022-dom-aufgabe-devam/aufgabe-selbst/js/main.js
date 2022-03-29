
const carElem = document.querySelector('#car')
const carTextElem = document.querySelector('.car-text')
const catTextElem = document.querySelector('.cat-text')
const catElem = document.querySelector('#cat')
const sunElem = document.querySelector('.sun-icon')
const sunTextElem =document.querySelector('.sun-text')

carElem.addEventListener('dragstart', (e) => {
    
    e.dataTransfer.setData('car', carElem.id);
})

catElem.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('cat',catElem.id )
})

sunElem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('sun', sunElem.id)
}) 


//-----------------------------------------------------------------------------------

carTextElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})

catTextElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})

sunTextElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})

//----------------------------------------------------------------------------------

carTextElem.addEventListener('drop', (e) => {
    e.preventDefault()

    let id = e.dataTransfer.getData('car')
    
    
    carTextElem.appendChild(document.getElementById(id))
    //carTextElem.innerHTML = ''
    

    //carTextElem.style.backgroundColor = 'greenyellow'
 
})

catTextElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('cat')
    

    catTextElem.appendChild(document.getElementById(id))
    //catTextElem.innerHTML = ''
    //catTextElem.style.color = 'greenyellow' 
    
})

sunTextElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('sun')

    sunTextElem.appendChild(document.getElementById(id))
    //sunTextElem.innerHTML=''
})