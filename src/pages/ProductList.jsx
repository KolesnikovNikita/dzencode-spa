import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { ProductItem } from '../components/ProductItem';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function ProductsList() {
    const [selectedType, setSelectedType] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = useSelector((state) => state.ProductListReducer);

    useEffect(() => {
        const filteredProducts = products.filter((product) => product.type === selectedType);
        setFilteredProducts(filteredProducts);
    }, [selectedType, products]);

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    return (
        <>
            <Form.Select value={selectedType} onChange={handleTypeChange} aria-label="Product Type">
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
