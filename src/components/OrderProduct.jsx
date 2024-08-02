import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export const OrderProduct = ({ productProps }) => {
    return (
        <Col>
            <ListGroup.Item>
                <p>id: {productProps.id}</p>
                <b>name:{productProps.title}</b>
                <p>{productProps.type}</p>
            </ListGroup.Item>
        </Col>
    );
};
