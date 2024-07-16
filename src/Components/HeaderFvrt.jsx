import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeaderFvrt() {
  return (
    <div>
        <Navbar className="bg-yellow-400 h-16">
            <Container>
            <Navbar.Brand href="#home">
                <h4 className='flex items-center mt-2'>
                    <Link to={'/'} className='no-underline'>
                    <i className="fa-solid fa-pepper-hot fa-bounce text-red-700"></i>
                    <span className='ms-2 font-extrabold text-black'>Food Park(The tast3 of London)</span>
                    </Link>
                </h4>
            </Navbar.Brand>
            <div>
            <Link to={'/menu'} className='md:border-none'><i class="fa-solid fa-list text-black font-bold text-xl md:text-2xl me-3"></i></Link>
            </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default HeaderFvrt