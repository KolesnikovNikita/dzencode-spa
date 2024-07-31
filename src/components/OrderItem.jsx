import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const OrderItem = (props) => {
    console.log(props);
    return (
        <ListGroup.Item>
            <p>id: {props.productProps.id}</p>
            <b>name:{props.productProps.title}</b>
        </ListGroup.Item>
    );
};
