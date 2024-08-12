import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

export const OrderProduct = ({ productProps }) => {
    return (
        <Col>
            <ListGroup.Item className="shadow mb-2">
                <p>id: {productProps.id}</p>
                <b>name:{productProps.title}</b>
                <p>{productProps.type}</p>
            </ListGroup.Item>
        </Col>
    );
};
