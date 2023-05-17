import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [authors, setAuthors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the product object
        const newAuthor = {
            authors: authors
        }

        // Send a POST request to the API to add the product
        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then(res => {
                console.log(res.data);
                // Clear the form fields
                setAuthors('');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <fieldset>
            <legend>Add Your Favorite Author!!!</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Authors:</label>
                    <input
                        type="text"
                        value={authors}
                        onChange={(e) => setAuthors(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </fieldset>
    );
};

export default Form
