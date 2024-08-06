import { Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import ProductsList from './pages/ProductsList';
import OrdersList from './pages/OrdersList';
import { HomePage } from './pages/HomePage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="orders" element={<OrdersList />} />
                    <Route path="products" element={<ProductsList />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<p>Not Found</p>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
