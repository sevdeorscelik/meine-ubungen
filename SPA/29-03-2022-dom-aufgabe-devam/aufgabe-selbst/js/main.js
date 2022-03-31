
const carElem = document.querySelector('#car')
const carTextElem = document.querySelector('.car-text')
const catTextElem = document.querySelector('.cat-text')
const catElem = document.querySelector('#cat')
const sunElem = document.querySelector('.sun-icon')
const sunTextElem =document.querySelector('.sun-text')



carElem.addEventListener('dragstart', (e) => {
    
    e.dataTransfer.setData('icon', carElem.id);
})

catElem.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('icon',catElem.id )
})

sunElem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('icon', sunElem.id)
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

    let id = e.dataTransfer.getData('icon')
    carTextElem.appendChild(document.getElementById(id))
    
    if(carTextElem.firstChild.id === carElem.id){
        carTextElem.style.backgroundColor = 'green'
    } else{
        carTextElem.style.backgroundColor = 'brown'
    }
 
})

catTextElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('icon')
    
    catTextElem.appendChild(document.getElementById(id))

    if(catTextElem.firstChild.id === catElem.id){
        catTextElem.style.backgroundColor = 'green'
    } else{
        catTextElem.style.backgroundColor = 'brown'
    }    
})

sunTextElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('icon')

    sunTextElem.appendChild(document.getElementById(id))

    if(sunTextElem.firstChild.id === sunElem.id){
        sunTextElem.style.backgroundColor = 'green'
    } else{
        sunTextElem.style.backgroundColor = 'brown'
    }
   
})