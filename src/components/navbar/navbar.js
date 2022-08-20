import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar/navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className='navbar' sticky='top'>
      <Container>
        <Navbar.Brand href="#home" style={{color: 'red'}}>
        <img
        className='rotateimg180'
        src="../images/setloco.ico"
        width="35"
        height="35"
        color='white'
        />{' Strategic Electrical Technologies'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'grey'}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: '60px'}}>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color: 'white'}}>Link</Nav.Link>
            <NavDropdown title="Social Links" id="basic-nav-dropdown" className='socialIcons'>
              <NavDropdown.Item href="https://www.instagram.com/setincusa/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true" style={{paddingRight: '5px', color: 'black'}}/> Instagram
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.facebook.com/setincusa" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true" style={{paddingRight: '10px', color: 'black'}}/> Facebook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/nicky-wilson-9b873089/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true" style={{paddingRight: '10px', color: 'black'}}/> LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="tel:" target="_self">
                <i className="fa fa-phone" aria-hidden="true" style={{paddingRight: '10px', color: 'black'}}/>Call Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="mailto:" target="_self">
                <i className="fa fa-envelope" aria-hidden="true" style={{paddingRight: '10px', color: 'black'}}/>Email Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
