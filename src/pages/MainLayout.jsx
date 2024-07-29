import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MainLayout() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <div className="row">
                    <div className="col-4">
                        <Navbar.Brand href="#home">INVENTORY</Navbar.Brand>
                    </div>
                    <div className="col-8">
                        <InputGroup className="mb-3">
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                        </InputGroup>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default MainLayout;
