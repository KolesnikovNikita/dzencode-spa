import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { ProductItem } from '../components/ProductItem';

function ProductsList() {
    const products = useSelector((state) => state.products);

    return (
        <ListGroup>
            {products.map((product) => {
                return <ProductItem key={product.id} productProps={product} />;
            })}
        </ListGroup>
    );
}

export default ProductsList;
