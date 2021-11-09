import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    );
};
export default App;

// start from 2:04:00          (08/11/2021)
