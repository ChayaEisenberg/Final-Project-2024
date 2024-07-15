

// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import '../App.css';

// export default function MyNavbar() {
//   return (
//     <Navbar bg="white" expand="lg">
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/login" className="nav-link-custom">
//               <FaUser />
//             </Nav.Link>
//             <Nav.Link as={Link} to="/signup" className="nav-link-custom">
//               sign up
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }




import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../App.css';

export default function MyNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login" className="nav-link-custom">
              <FaUser />
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="nav-link-custom">
              sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
