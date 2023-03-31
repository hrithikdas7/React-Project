import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt="no img"
          src="https://tse3.mm.bing.net/th?id=OIP.Ci4ns3JrHahKF9rKLdS5UwHaHc&pid=Api&P=0"
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '} &nbsp;
        Find Me Restuarant
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header