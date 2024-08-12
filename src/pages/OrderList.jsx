import ListGroup from 'react-bootstrap/ListGroup';
import { OrderProduct } from '../components/OrderProduct.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderItem } from '../components/OrderItem.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const OrdersList = () => {
    const [currentOrder, setCurrentOrder] = useState(null);
    const ordersList = useSelector((state) => state.orderReducer);
    const productsList = useSelector((state) => state.productReducer);

    const productHandler = (id) => {
        setCurrentOrder(id);
    };
    const foundProduct = productsList.filter((product) => product.order === currentOrder);

    return (
        <Row>
            {ordersList.length > 0 && (
                <Col>
                    <ListGroup>
                        {ordersList.map((order) => {
                            return (
                                <OrderItem
                                    onClick={() => productHandler(order.id)}
                                    key={order.id}
                                    products={foundProduct}
                                    orderProps={order}
                                />
                            );
                        })}
                    </ListGroup>
                </Col>
            )}

            {foundProduct.length > 0 && (
                <Col>
                    <ListGroup>
                        {foundProduct.map((product) => (
                            <OrderProduct productProps={product} key={product.id} />
                        ))}
                    </ListGroup>
                </Col>
            )}
        </Row>
    );
};

export default OrdersList;
