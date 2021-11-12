import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartContext from "./CartContext";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import { useState, useEffect } from "react";

const App = () => {
    const [cart, setCart] = useState({});
    // Fetching the cart from local storage
    useEffect(() => {
        const cart = window.localStorage.getItem("cart");
        setCart(JSON.parse(cart));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route
                            exact
                            path="/products"
                            component={ProductsPage}
                        ></Route>
                        <Route
                            path="/products/:_id"
                            component={SingleProduct}
                        ></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    );
};
export default App;

// start from here 👇🏼        (11/11/2021)
// https://youtu.be/MfhZJcTOy1A?t=13886
