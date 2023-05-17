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
                        <table style={{ backgroundColor: "blanchedAlmond", color: "black", border: "solid", borderColor: "red" }}>
                            <tr>
                                <th>Author ✍️</th>
                                <th>Actions Available 🎬</th>
                            </tr>
                            <tr>
                                <td style={{ border: "solid" }}>{author.author}</td>
                                <td style={{ border: "solid" }}>
                                    <Link to={`/delete/${author._id}`}>Delete</Link>
                                    |
                                    <Link to={`/update/${author._id}`}>Update</Link>
                                </td>
                            </tr>
                        </table>
                    </div>;
                })}
            </div>
        </fieldset>
    );
};

export default DisplayAll;

