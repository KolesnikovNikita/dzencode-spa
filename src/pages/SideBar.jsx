import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                </Col>
            </Row>
        </>
    );
}

export default SideBarMenu;
