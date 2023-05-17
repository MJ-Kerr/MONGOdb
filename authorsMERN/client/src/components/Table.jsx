import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data.Authors);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                console.log(res.data);
                setAuthors(authors.filter(author => author._id !== authorId));
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <fieldset>
            <div>
                <Link to="/form" style={{ color: "cornflowerblue" }}>Add Author</Link>
                <table style={{ backgroundColor: "blanchedAlmond", color: "black", border: "solid", borderColor: "red" }}>
                    <thead>
                        <tr>
                            <th>Author ✍️</th>
                            <th>Actions Available 🎬</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author) => (
                            <tr key={author._id}>
                                <td style={{ border: "solid" }}>{author.author}</td>
                                <td style={{ border: "solid" }}>
                                    <Link to={`/update/${author._id}`}>Update</Link>
                                    |
                                    <button onClick={() => deleteAuthor(author._id)} style={{ backgroundColor: "red" }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </fieldset>
    );
};

export default DisplayAll;
