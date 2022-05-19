import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DisplayForm = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(response => {
                setAuthors(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(response => {
                const filteredList = authors.filter((author, i) => author._id !== deleteId)
                setAuthors(filteredList)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/authors/new">New Author</Link>
            <h1>We have quotes by:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i) => (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td> <Link to={`/authors/${author._id}/edit`}> Edit</Link></td>
                                <td><button onClick={() => handleDelete(author._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayForm