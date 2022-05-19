import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Update = () => {
    const [name, setName] = useState()
    const navigate = useNavigate()
    // const [errors, setErrors] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                console.log(response.data)
                const author = response.data
                setName(author.name)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then(response => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <Link to="/">Cancel</Link>
                <button type="submit">Update product</button>
            </form>
            {/* {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            } */}
        </div>
    )
}

export default Update