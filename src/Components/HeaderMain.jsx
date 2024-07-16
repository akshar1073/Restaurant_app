import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function HeaderMain() {
  return (
    <div>
        <Navbar className="bg-yellow-400 h-16">
            <Container>
            <Navbar.Brand href="#home">
                <h4 className='flex items-center mt-2'>
                    <i className="fa-solid fa-pepper-hot fa-bounce text-red-700"></i>
                    <span className='ms-2 font-extrabold text-black'>Food Park(The taste of London)</span>
                </h4>
            </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default HeaderMain