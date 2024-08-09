import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ListGroup, Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromOrders } from '../store/actions';
import { useSelector } from 'react-redux';

export const OrderItem = ({ orderProps, onClick }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const productsList = useSelector((state) => state.productReducer);

    const productsOfOrder = productsList.filter((product) => product.order === orderProps.id);
    const { amountDollarProductsPrice, amountNationalProductsPrice } = productsOfOrder.reduce(
        (acc, product) => {
            acc.amountDollarProductsPrice += product.price[0].value;
            acc.amountNationalProductsPrice += product.price[1].value;
            return acc;
        },
        {
            amountDollarProductsPrice: 0,
            amountNationalProductsPrice: 0,
        }
    );

    const dispatch = useDispatch();

    return (
        <ListGroup.Item className="mb-4 shadow" key={orderProps.id} onClick={onClick}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Вы уверены,что хотите удалить этот приход?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            dispatch(deleteFromOrders(orderProps.id));
                            handleClose();
                        }}
                    >
                        Удалить
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card>
                <Row className="align-items-center d-flex">
                    <Col>
                        <Card.Body>
                            <Card.Title>{orderProps.title}</Card.Title>
                        </Card.Body>
                    </Col>
                    <Col>
                        <div>{productsOfOrder.length}</div>
                        <div>Продуктов</div>
                    </Col>
                    <Col>{orderProps.date}</Col>
                    <Col>
                        <div>{amountDollarProductsPrice}$</div>
                        <div>{amountNationalProductsPrice}грн.</div>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={handleShow}>
                            Delete
                        </Button>
                    </Col>
                </Row>
            </Card>
        </ListGroup.Item>
    );
};
