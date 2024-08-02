import OrdersList from './OrdersList.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MainPage } from './Main.jsx';
import ProductsList from './ProductsList.jsx';
import { mainPath, productPath, orderPath } from '../helpers/routes.js';

export const NavigationMenu = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Main Page</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path={mainPath()} component={MainPage} />
                <Route exact path={productPath()} component={ProductsList} />
                <Route exact path={orderPath()} component={OrdersList} />
            </Routes>
        </Router>
    );
};
