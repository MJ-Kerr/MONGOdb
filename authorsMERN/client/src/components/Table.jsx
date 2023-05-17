import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const DisplayAll = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data.Authors); // Update to res.data.Authors
                console.log(res.data.Authors);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // console.log('Authors:', authors);

    return (
        <fieldset>
            {/* {JSON.stringify(authors)} */}

            <div>
                {authors.map((author) => {
                    console.log(author);
                    return <div key={author._id}>
                        <Link to={`/${author._id}`}>{author.author}</Link>
                    </div>;
                })}
            </div>
        </fieldset>
    );
};

export default DisplayAll;

