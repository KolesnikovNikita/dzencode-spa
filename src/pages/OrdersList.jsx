import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderItem } from '../components/OrderItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const OrdersList = () => {
    const orders = useSelector((state) => state.orders);
    const products = useSelector((state) => state.products);

    const [selectProduct, setSelectProduct] = useState(null);

    const productClickHandler = (id) => {
        const foundProduct = products.filter((product) => product.id === id);
        setSelectProduct(foundProduct);
    };

    return (
        <Row>
            <Col>
                <ListGroup>
                    {orders.map((order) => {
                        return (
                            <OrderItem
                                onClick={() => productClickHandler(order.id)}
                                key={order.id}
                                orderProps={order}
                            />
                        );
                    })}
                </ListGroup>
            </Col>
            <Col>
                {selectProduct && (
                    <ul>
                        <li>Name: {selectProduct.id}</li>
                    </ul>
                )}
            </Col>
        </Row>
    );
};

export default OrdersList;
