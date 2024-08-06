import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavigationMenu } from './NavigationMenu.jsx';
import { Outlet } from 'react-router-dom';

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
                <Col md="3">
                    <Image
                        className="w-50"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_Vx9mSNmHZ4s-6rTQz2LZiIgJo24tnh33g&s"
                        roundedCircle
                    />

                    <NavigationMenu />
                </Col>
                <Col md="9">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default MainLayout;
