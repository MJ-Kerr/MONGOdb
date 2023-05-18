import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = (props) => {
    const { id } = useParams()
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data)
                setAuthors(res.data.Author.author)
            })
            .catch(err => console.log(err.response.data))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = {
            author: authors
        }

        axios.patch('http://localhost:8000/api/authors/' + id, newAuthor)
            .then(res => {
                console.log(res.data);
                setAuthors('');
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = Object.values(errorResponse).map(error => error.message);
                setErrors(errorArr);
                console.log(err);
            });
    };

    return (
        <div>Update
            <form onSubmit={handleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={authors}
                        onChange={(e) => setAuthors(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Update
