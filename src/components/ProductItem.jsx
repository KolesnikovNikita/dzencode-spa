import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductItem = ({ productProps }) => {
    return (
        <ListGroup.Item key={productProps.id}>
            <p>id: {productProps.id}</p>
            <b>name:{productProps.title}</b>
        </ListGroup.Item>
    );
};
