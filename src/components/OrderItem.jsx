import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ListGroup, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromOrders } from '../store/actions';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <ListGroup.Item className="mb-2 shadow" key={orderProps.id} onClick={onClick}>
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

            <Row className="align-items-center d-flex">
                <Col>{orderProps.title}</Col>
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
                    <button
                        onClick={handleShow}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            padding: 0,
                            margin: 0,
                            cursor: 'pointer',
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} size="1x" />
                    </button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};
