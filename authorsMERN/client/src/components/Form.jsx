import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
    const [authors, setAuthors] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the author object
        const newAuthor = {
            author: authors
        }

        // Send a POST request to the API to add the author
        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then(res => {
                console.log(res.data);
                // Clear the form fields
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
        <fieldset>
            <legend>Add Your Favorite Author!!!</legend>
            <Link to="/" style={{ color: "cornflowerblue" }}>Home</Link>
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
        </fieldset>
    );
};

export default Form;
