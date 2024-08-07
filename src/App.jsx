import { Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import ProductList from './pages/ProductList';
import OrderList from './pages/OrderList';
import { HomePage } from './pages/HomePage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="orders" element={<OrderList />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="*" element={<p>Not Found</p>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
