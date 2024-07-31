import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderItem } from '../components/OrderItem';
import { useSelector } from 'react-redux';

function OrdersList() {
    const orders = useSelector((state) => state.orders);

    return (
        <ListGroup>
            {orders.map((order) => {
                return <OrderItem key={order.id} productProps={order} />;
            })}
        </ListGroup>
    );
}

export default OrdersList;
