import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import SideBarMenu from './SideBar.jsx';

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
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Text className="ms-auto">{formattedTime}</Navbar.Text>
                </Container>
            </Navbar>
            <SideBarMenu />
        </Container>
    );
}

export default MainLayout;
