import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar/navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className='navbar' sticky='top'>
      <Container>
        <Navbar.Brand href="#home">
        <img
        className='rotateimg180'
        src="../images/setloco.ico"
        width="35"
        height="35"
        />{' Strategic Electrical Technologies'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: '60px'}}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Social Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/setincusa/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true" style={{paddingRight: '5px', color: 'black'}}/> Instagram
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.facebook.com/setincusa" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true" style={{paddingRight: '10px', color: 'black'}}/> Facebook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="tel:">
                <i className="fa fa-phone" aria-hidden="true" style={{paddingRight: '10px', color: 'black'}}/>Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
