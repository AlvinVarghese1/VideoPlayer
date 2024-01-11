import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigativeByUrl = useNavigate
  return (
   <>
   <Row className='mt-5 mb-5 d-flex align-items-center  justify-content-between w-100'>
    <Col lg={5}>
      <h3 className='mb-3'>Welcome to <span className='text-warning'>Video Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, corrupti reprehenderit temporibus sint nihil non eveniet molestias veniam porro illo, nobis delectus enim numquam odit, vel molestiae cumque facilis impedit?</p>
      <button onClick={()=>navigativeByUrl('/home')} className='btn btn-warning mt-4'>Get Started <i class="fa-solid fa-arrow-right ms-1"></i></button>
    </Col>
    <Col></Col>
    <Col></Col>
    <Col lg={5}>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
    </Col>
    
     
    
   </Row>

   <div className='container mb-5 mt-5 d-flex align-items-center  justify-content-center flex-column '>
    <h3>Features</h3>
    <div className="cards d-flex  align-items-center  justify-content-evenly w-100 ">

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>


    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>



    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}}  src="https://steamuserimages-a.akamaihd.net/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

   </div>

   <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5 d-flex align-items-center  justify-content-between w-100">
    <div className="col-lg-5 ">
      <h3 className='mb-5 text-warning'>Simple and powerful</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque? Architecto, perspiciatis doloremque consectetur omnis sint voluptate obcaecati repellat officiis sit nulla veritatis corporis esse enim earum amet nam iure.</p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque? Architecto, perspiciatis doloremque consectetur omnis sint voluptate obcaecati repellat officiis sit nulla veritatis corporis esse enim earum amet nam iure.</p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque? Architecto, perspiciatis doloremque consectetur omnis sint voluptate obcaecati repellat officiis sit nulla veritatis corporis esse enim earum amet nam iure.</p>
    </div>

    <div className="col-lg-5"><iframe width="100%" height="300" src="https://www.youtube.com/embed/V3bZZ2h8UdU?si=Y23I66ZLE5SCmxRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
   </div>
   
   </>
  )
}

export default LandingPage