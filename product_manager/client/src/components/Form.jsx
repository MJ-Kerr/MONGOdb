import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the product object
        const newProduct = {
            title: title,
            description: description,
            price: price
        };

        // Send a POST request to the API to add the product
        axios.post('http://localhost:8000/api/products', newProduct)
            .then(res => {
                console.log(res.data); // Optional: Log the response
                // Clear the form fields
                setTitle('');
                setDescription('');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <fieldset>
            <legend>Add Product</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
        </fieldset>
    );
};

export default Form
