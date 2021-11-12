import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../CartContext";
const Product = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;
    const addToCart = (e, product) => {
        e.preventDefault();
        // console.log(e);
        // console.log(product);
        // const cart = {
        //     items: { 132332: 3, 132333: 2 },
        //     totalItems: 5,
        // };
        let _cart = { ...cart };
        if (!_cart.items) {
            _cart.items = {};
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }
        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 400);
    };
    return (
        <Link to={`products/${product._id}`}>
            <div>
                <div>
                    <img
                        className="rounded-xl"
                        src={product.image}
                        alt="peproni"
                    ></img>
                    <div className="text-center">
                        <h2 className="font-bold text-lg py-2">
                            {product.name}
                        </h2>
                        <span className="font-mono bg-purple-300 rounded-md py-1 px-2 text-sm">
                            {product.size}
                        </span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="rounded-md py-1 px-3 bg-gray-200 mr-3 font-smaller">
                            ${product.price}
                        </span>
                        <button
                            disabled={isAdding}
                            onClick={(e) => {
                                addToCart(e, product);
                            }}
                            className={`${
                                isAdding ? "bg-green-400" : "bg-yellow-300"
                            } py-1 px-4 rounded-full font-bold`}
                        >
                            ADD{isAdding ? "ED" : ""}
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default Product;
