import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const OrderItem = ({ orderProps, onClick }) => {
    return (
        <ListGroup.Item key={orderProps.id} onClick={onClick}>
            <p>id: {orderProps.id}</p>
            <b>name:{orderProps.title}</b>
        </ListGroup.Item>
    );
};
