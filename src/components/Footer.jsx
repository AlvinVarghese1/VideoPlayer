import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column' >
      <div className="footer d-flex align-items-center justify-content-evenly w-100">
        <div className="websites" style={{ width: '400px' }}>
          <h4><i class="fa-solid fa-play fa-flip text-warning "></i>{' '}
            Video Player</h4>
          <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum, hic, ipsum sapiente nemo earum dolorem qui corporis, reprehenderit iure adipisci consequatur aliquid explicabo atque quaerat natus quisquam dolores ex!</h6>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'white' }}>Watch history</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 className='mb-3'>Guides</h4>
          <Link to={'https://bootswatch.com'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://bootswatch.com'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
        </div>
        <div className="contacts">
          <h4 className='mb-3'>Contact Us</h4>
          <div className="d-flex mb-3">
            <input type="text" className='form-control' placeholder='Enter your Email ID' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>

          <div className="d-flex justify-content-evenly align-items-center">
            <Link to={'https://bootswatch.com'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://bootswatch.com'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x "></i></Link>
            <Link to={'https://bootswatch.com'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-x-twitter fa-2x "></i></Link>

          </div>
        </div>
      </div>

      <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia </p>

    </div>
  )
}

export default Footer