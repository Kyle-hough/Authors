import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const CreateForm = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        axios.post(`http://localhost:8000/api/authors`, { name })
            .then(response => navigate('/'))
            .catch(err => {
                const errArr = []
                const errResData = err.response.data.errors
                console.log(errResData)
                for (const key in errResData) {
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
            })
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
                <button type="submit">Create a new product</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            }
        </div>
    )
}

export default CreateForm