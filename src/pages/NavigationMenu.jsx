import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OrdersList from './OrdersList';
import ProductsList from './ProductsList';

export const NavigationMenu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </>
    );
};
