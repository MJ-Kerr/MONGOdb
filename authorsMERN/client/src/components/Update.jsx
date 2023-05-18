import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Update = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((res) => {
                setAuthors(res.data.Authors);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {authors.map((author) => (
                <fieldset key={author._id}>
                    Update {author.author}
                </fieldset>
            ))}
        </div>
    );
};

export default Update;
