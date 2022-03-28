//1

const changeTextBtn = document.querySelector('.btn-1')
const firstParag = document.querySelector('.p-1')


changeTextBtn.addEventListener('click', (e) => {

    if( firstParag.style.color != 'brown'){
    firstParag.style.backgroundColor = 'pink'
    firstParag.style.color = 'brown'
    firstParag.style.fontSize = '2rem'
    firstParag.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    } else{
        firstParag.style.color = ''
        firstParag.style.backgroundColor = ''
        firstParag.style.fontSize = ''
        firstParag.style.fontFamily = ''
    }
})

//2
 
const firstNameElem = document.querySelector('.first-name')
const lastNameElem = document.querySelector('.last-name')
const showBtn = document.querySelector('.btn-2')
const secondParag = document.querySelector('.full-name')
const clearBtn = document.querySelector('.clear-btn')
showBtn.addEventListener('click', (e) => {
    e.preventDefault()
    secondParag.innerHTML = `${firstNameElem.value} ${lastNameElem.value}`
})
clearBtn.addEventListener('click', e => {
    e.preventDefault()
    secondParag.innerHTML = ''
    firstNameElem.value = ''
    lastNameElem.value = ''
})



//3

firstNameElem.addEventListener('focus', (e) => {
    e.target.style.background = 'pink'
})
firstNameElem.addEventListener('blur', (e) => {
    e.target.style.background = ''
})

//4

//5

//yeni row ekleme-----------------

const btnAddRow = document.querySelector('.btn-3')
const mainTableElem = document.querySelector('#my-table')

attachEvents()

btnAddRow.addEventListener('click', () => {
    
    const row = mainTableElem.insertRow(0)

    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)

    cell1.innerHTML = 'Robert'
    cell2.innerHTML = 'Angelton'
    const cellButton = row.insertCell(2);
	cellButton.innerHTML = '<button class="btn-edit">Edit</button>';
	attachEvents();
})

//row düzenleme---------------------


function attachEvents(){
const btnEditElems = document.querySelectorAll('.btn-edit')
btnEditElems.forEach(btnEditElem => {
    btnEditElem.addEventListener('click', () => {
        const firstName = btnEditElem.parentElement.parentElement.children[0]
        const lastName = btnEditElem.parentElement.parentElement.children[1]
        firstName.innerHTML = `<input value="${firstName.innerText}"/>`
		lastName.innerHTML = `<input value="${lastName.innerText}"/>`
    })
})
}


//6

const btnDelete = document.querySelector('.btn-delete')
const colorsElem = document.querySelector('.colors')

const btnAdd = document.querySelector('.add-color-btn')
const newItemElem = document.querySelector('.new-item')

btnDelete.addEventListener('click', () => {
    colorsElem.remove(colorsElem.selectedIndex)
})

btnAdd.addEventListener('click', () => {
    const newColor = newItemElem.value;
    const option = document.createElement('option')
    option.text = newColor
    option.value = newColor.toLowerCase()
    colorsElem.add(option)
    newItemElem.value = ''
})



