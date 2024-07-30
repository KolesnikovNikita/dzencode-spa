import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function SideBarMenu() {
    return (
        <>
            <Row>
                <Col>
                    <Image
                        className="w-50"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_Vx9mSNmHZ4s-6rTQz2LZiIgJo24tnh33g&s"
                        roundedCircle
                    />
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
