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
                <Col style={{ height: '100vh' }} className="pt-5 d-flex flex-column align-items-center shadow" md={2}>
                    <Image
                        className="mb-4"
                        style={{ width: '100px', height: '100px' }}
                        src="https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg"
                        roundedCircle
                    />

                    <NavigationMenu />
                </Col>
                <Col className="pt-2 bg-light" md="10">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default MainLayout;
