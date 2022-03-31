//1-Make page where user can click a button that changes font family, font size, and color of the paragraph text

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

//2-Make a page with a form that has First Name and Last Name, when button is clicked, first and last name are displayed on page
 
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



//3-Make a page where when user clicks in input field, it changes the background of a paragraph

firstNameElem.addEventListener('focus', (e) => {
    e.target.style.background = 'pink'
})
firstNameElem.addEventListener('blur', (e) => {
    e.target.style.background = ''
})

//4-Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

//5-Make a page with a button that adds a row to a table, each row has an edit button which allows you to change the value of each cell in the row

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


//6-Make a dropdown control with numerous entries, make a button which removes the currently selected entry

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

//7-Write a form with button that calculates the volume of a sphere

//8-Create a page that has a button which displays a random photo

//1.yol

const btnShowPhotoElem = document.querySelector('.btn-show-photo')
const contentElem = document.querySelector('.content')
/*
btnShowPhotoElem.addEventListener('click', () => {
    const num = Math.floor(Math.random() * 3)
    const fileName = `foto-${num}.jpg`
    contentElem.innerHTML = `<img src="images/${fileName}"/>`
})
*/

const photos = [
    {
        title: 'Cherry Blossom',
        fileName: 'foto-0.jpg',
        width: 300
    },
    {
        title: 'Cat',
        fileName: 'foto-1.jpg',
        width: 400
    },
    {
        title: 'Lavander',
        fileName: 'foto-2.jpg',
        width: 500
    }
]
const title = document.querySelector('.title')
btnShowPhotoElem.addEventListener('click', () => {
    const index = Math.floor(Math.random() * 3)
    const photo = photos[index]
    contentElem.innerHTML = `<img src="images/${photo.fileName}" style="width:${photo.width}px"/><p>${photo.title}</p>`
})

//9-Create a page that shows the current width and height of the window as it is resized - hint: let w = document.documentElement.clientWidth; let h = document.documentElement.clientHeight;Create a page that shows the current width and height of the window as it is resized - hint: let w = document.documentElement.clientWidth; let h = document.documentElement.clientHeight;
//10-ayri dosyada

//11- Use innerHTML und string literals to create employee cards from the Northwind database
//baska dosyada







//12- Use createElement and appendChild to create employee cards from the Northwind database
//13- Create an interactive flashcard game based on the Curriculum JSON
//14- Create a password generator
//15- Create a login page with validation and "show password" option
//16- Create a search machine for the HTML DOM items in Curriculum
//17- Create a three-page form which prints out the data at the end
//18- Create a bookstore to order books


