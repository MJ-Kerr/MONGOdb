import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const Update = (props) => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data.Authors);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (

        <fieldset>Update</fieldset>
    )
}

export default Update