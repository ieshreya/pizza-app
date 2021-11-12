import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
const SingleProduct = (props) => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const history = useHistory();
    useEffect(() => {
        fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
            .then((res) => res.json())
            .then((product) => {
                setProduct(product);
                // console.log(product);
            });
    }, [params._id]);
    return (
        <div className="container mt-12 mx-auto">
            <button
                className="mb-12 font-bold"
                onClick={() => {
                    history.goBack();
                }}
            >
                Back
            </button>
            <div className="flex">
                <img
                    className="rounded-xl"
                    src={product.image}
                    alt={product.name}
                />
                <div className="ml-16">
                    <h1 className="text-xl font-bold mb-3">{product.name}</h1>
                    <span className="text-md font-mono bg-purple-300 rounded-md py-1 px-2">
                        {product.size}
                    </span>
                    <div className=" mt-6 font-bold">${product.price}</div>
                    <button className="bg-yellow-300 py-1 px-6 rounded-md font-bold mt-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
