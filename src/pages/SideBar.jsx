import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function SideBarMenu() {
    return (
        <>
            <Row className="" style={{ width: '18rem', height: '100vh' }}>
                <Col>
                    <ListGroup>
                        <ListGroup.Item action>Orders</ListGroup.Item>
                        <ListGroup.Item action>Products</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
}

export default SideBarMenu;
