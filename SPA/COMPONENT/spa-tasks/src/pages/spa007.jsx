import React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"
import { FaSpinner } from "react-icons/fa";


const Spa007 = () => {

    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        axios.get('https://gutendex.com/books/?search=aristotle')
            .then(resp => setBooks(resp.data.results))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))




    }, [])

    console.log(books);
    books.map(book => console.log(book.title))
    //<img src={book.formats.image/jpeg} alt="photo" />



    return (
        <div className="Spa007">
            <h3>Spa007 - Load data from the Website API</h3>
            <div className="container-7">
                <h2> Book List</h2>
                {isLoading && <div ><FaSpinner className="spinner-icon" /> Loading...</div>}
                <ul>
                    {
                        books.map((book, index) => {
                            return (
                                <li key={index}> <strong>{book.authors.map(m => m.name)}</strong> - {book.title}</li>
                            )


                        })
                    }
                </ul>

            </div>

        </div>
    )
}

export default Spa007