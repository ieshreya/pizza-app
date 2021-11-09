import { Link } from "react-router-dom";

const Navigation = () => {
    const cartStyle = {
        color: "#fff",
        backgroundColor: "#A45D5D",
        display: "flex",
        padding: "6px 12px",
        borderRadius: "45px",
    };
    return (
        <>
            <nav className="container mx-auto flex justify-between py-4 items-center">
                <Link to="/">
                    <img src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="ml-6">
                        <Link style={cartStyle} to="/cart">
                            <span>8</span>
                            <img
                                className="ml-2"
                                src="/images/cart.png"
                                alt="cart"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
