import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'





const Home = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {

    setLoading(true);
    fetch('http://localhost:5555/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema al obtener los libros.')
        }
        return response.json();
      })
      .then(data => {
        setBooks(data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })


    //clear funct
    return () => {
    }
  }, [])



  return (
    <>
      <h1>HOME</h1>
      <br />

      {
        loading ? (<Spinner />) :
          (<table border={1} cellPadding={8}>
            <thead>
              <tr>
                <th>NO</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publish year</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishYear}</td>
                  <td>Options</td>
                </tr>
              ))}
            </tbody>
          </table>)
      }
    </>
  )
}

export default Home