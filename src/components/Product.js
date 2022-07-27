import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
    const { id } = useParams();
    const [Product, setProduct] = useState({});

    useEffect(() => { axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
            console.log(res.data);
            setProduct(res.data);
            })
            .catch((err) => {
            console.log(err);
            });
    }, [id]);
    return (
        <div className="Product-component">
            <h2>{Product.title}</h2>
            <p>Price: ${Product.price}</p>
            <p>Description: {Product.description}</p>
        </div>
    );
};

export default Product;