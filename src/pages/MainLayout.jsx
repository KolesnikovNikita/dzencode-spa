import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { NavigationMenu } from './NavigationMenu.jsx';
import { Outlet } from 'react-router-dom';
import { TopMenu } from '../components/TopMenu.jsx';

function MainLayout() {
    return (
        <Container fluid className="px-0">
            <TopMenu />
            <Row>
                <Col style={{ height: '100vh' }} className="pt-5 d-flex flex-column align-items-center shadow" md={3}>
                    <Image
                        className="mb-4"
                        style={{ width: '100px', height: '100px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_Vx9mSNmHZ4s-6rTQz2LZiIgJo24tnh33g&s"
                        roundedCircle
                    />

                    <NavigationMenu />
                </Col>
                <Col className="pt-2" md="9">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default MainLayout;
