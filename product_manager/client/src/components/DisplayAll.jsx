import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const DisplayAll = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.Products); // Update to res.data.Products
                console.log(res.data.Products);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // console.log('Products:', products);

    return (
        <fieldset>
            {/* {JSON.stringify(products)} */}

            <div>
                {products.map((product) => {
                    console.log(product);
                    return <div key={product._id}>
                        <Link to={`/${product._id}`}>{product.title}</Link>
                    </div>;
                })}
            </div>
        </fieldset>
    );
};

export default DisplayAll;

