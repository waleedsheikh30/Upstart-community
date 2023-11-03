import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


function Hnavbar() {
  return (
    
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="" style={{marginLeft: "18rem", fontFamily: "sans-serif" ,fontSize: "14px" ,textTransform: "uppercase" ,justifyContent: "space-between", letterSpacing: "0.3em" , color: "#000"}}>
            <Nav.Link as={Link} to="/" style={{padding: "8px 30px 0px 10px", color:"black" }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{padding: "8px 30px 0px 0px", color:"black"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/blog" style={{padding: "8px 30px 0px 5px", color:"black"}}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/community" style={{padding: "8px 20px 0px 0px", color:"black"}}>Community</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{padding: "8px 30px 0px 0px", color:"black"}}>Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   

    
  );
}

export default Hnavbar;