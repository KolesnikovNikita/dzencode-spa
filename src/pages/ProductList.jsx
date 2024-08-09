import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { ProductItem } from '../components/ProductItem';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ProductsList() {
    const [selectedType, setSelectedType] = useState('all');
    const products = useSelector((state) => state.ProductListReducer);

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    return (
        <>
            <Form.Select
                className="mb-4 shadow"
                value={selectedType}
                onChange={handleTypeChange}
                aria-label="Product Type"
            >
                <option defaultValue="all">All</option>
                <option value="Monitors">Monitors</option>
                <option value="PC">PC</option>
            </Form.Select>
            <ListGroup>
                {(selectedType === 'all' ? products : products.filter((product) => product.type === selectedType)).map(
                    (product) => (
                        <ProductItem key={product.id} productProps={product} />
                    )
                )}
            </ListGroup>
        </>
    );
}

export default ProductsList;
