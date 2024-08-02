import ListGroup from 'react-bootstrap/ListGroup';
import { OrderProduct } from '../components/OrderProduct.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderItem } from '../components/OrderItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OrdersList = () => {
    const orders = useSelector((state) => state.orders);
    const products = useSelector((state) => state.products);
    const [show, setShow] = useState(false);

    const [selectProduct, setSelectProduct] = useState(null);

    const productClickHandler = (id) => {
        const foundProduct = products.filter((product) => product.id === id);
        setSelectProduct(foundProduct);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
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
            {selectProduct &&
                selectProduct.map((product) => {
                    return <OrderProduct productProps={product} key={product.id} />;
                })}
        </Row>
    );
};

export default OrdersList;
