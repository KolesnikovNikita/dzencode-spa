import { Image, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TopMenu = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    let weekday = currentTime.toLocaleDateString('ru-RU', { weekday: 'long' });
    weekday = weekday.charAt(0).toLocaleUpperCase() + weekday.slice(1);
    const day = currentTime.getDate();
    let month = currentTime.toLocaleDateString('ru-RU', { month: 'long' });
    month = month.charAt(0).toLocaleUpperCase() + month.slice(1);
    const year = currentTime.getFullYear();
    const formattedTime = currentTime.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <Navbar className="shadow">
            <Container className="justify-content-between">
                <Row className="w-100 align-items-center justify-content-between">
                    <Col md="4">
                        <Navbar.Brand>
                            <Image
                                width="50"
                                src="https://cdn4.vectorstock.com/i/1000x1000/35/33/green-shield-icon-flat-vector-29223533.jpg"
                            />
                            <span>INVENTORY</span>
                        </Navbar.Brand>
                    </Col>
                    <Col md="3">
                        <Row>
                            <Col>{`${weekday}`}</Col>
                        </Row>
                        <Row>
                            <Col>{`${day} ${month}, ${year} ${formattedTime}`}</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};
