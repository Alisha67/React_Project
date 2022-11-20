import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Header = () => {
  return (
    <div className=''>
           <Row>
        <Col md={5} className="leftside">
        <div className="planecolor">
          
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('./images/women2.jpg')} className="women" />
      <Card.Body>
        <Card.Title>Maya <br /> Nelson </Card.Title>
        <Card.Text>
          Project Manager
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
        <div className="icon"> 
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-linkedin-in"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>
      </Card.Footer>
    </Card>
        </div>
        </Col>
    


 
        <Col md={7} className="whole">
          <div className="hye">
          <h1 className='hello'> Hello</h1>
          <h5 className='here'> Here's who i am & what i do</h5>
          <br/>
          <Button variant="" className='resume'>Resume</Button>{' '}
           <Button variant="" className='project'>Project</Button>{' '}
        
 <p >A front-end developer builds the front-end portion of websites and web applications—that is, the part that users actually see and interact with.
 <br /> A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app</p>


          </div>


        </Col>
      </Row>

    </div>
  )
}

export default Header
