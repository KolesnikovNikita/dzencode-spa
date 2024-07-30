import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import SideBarMenu from './SideBar.jsx';
import ProductsList from './ProductsList.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrdersList from './OrdersList.jsx';

function MainLayout() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <Container fluid>
            <Row>
                <Navbar expand="lg" className="mb-1 bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        <Navbar.Text className="ms-auto">{formattedTime}</Navbar.Text>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <Col lg="3">
                    <SideBarMenu />
                </Col>
                <Col>
                    <ProductsList />
                </Col>
                <Col>
                    <OrdersList />
                </Col>
            </Row>
        </Container>
    );
}

export default MainLayout;
