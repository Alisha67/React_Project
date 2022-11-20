import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
  return (
    <div className='footer'>
      <Row>
      <Col md={7}>
        <br/>
        <div className="copyright"> 
      <i class="fa-regular fa-copyright"></i> <span>2023 by Maya Nelson.</span>
      </div>
      </Col>
      <Col md={5}>
        <div className="detailgroup">
        <div className="call">
          <strong>Call</strong><br/>
          <span>9810000000</span>
        </div>
        <div className="call">
          <strong> Write</strong><br/>
          <span>9810000000</span>
        </div>
        <div className="call">
          <strong>Follow</strong><br/>
          <div className="icon2"> 
      <i class="fa-brands fa-facebook-f fi"></i>
      <i class="fa-brands fa-twitter fi"></i>
      <i class="fa-brands fa-linkedin-in fi"></i>
      <i class="fa-brands fa-instagram fi"></i>
      </div>
        </div>
        </div>
        </Col>
        </Row>
    </div>
  )
}

export default Footer
