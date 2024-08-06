import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromOrders } from '../store/actions';

export const OrderItem = ({ orderProps, onClick }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    return (
        <ListGroup.Item key={orderProps.id} onClick={onClick}>
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
            <p>id: {orderProps.id}</p>
            <b>name:{orderProps.title}</b>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
        </ListGroup.Item>
    );
};
