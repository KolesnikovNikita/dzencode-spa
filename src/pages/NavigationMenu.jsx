import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export const NavigationMenu = () => {
    return (
        <>
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/" className="fw-bold text-dark">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/orders" className="fw-bold text-dark">
                    Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/products" className="fw-bold text-dark">
                    Products
                </Nav.Link>
            </Nav>
        </>
    );
};
