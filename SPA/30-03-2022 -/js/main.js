import { getAdvert, title } from "./advert.js"

const contentElem = document.querySelector('.content')

contentElem.innerHTML = title

const adverts = [

    {
        "title": "Soap",
        "description": "buy this soap"
    },
    {
        "title": "Book",
        "description": "buy this book"
    }

]

adverts.forEach(advert => {
    contentElem.innerHTML += getAdvert(advert.title, advert.description)
})

