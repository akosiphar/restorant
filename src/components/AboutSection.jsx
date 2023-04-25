import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import AOS from 'aos'

import about_1 from '../assets/images/about-1.jpg'
import about_2 from '../assets/images/about-2.jpg'
import about_3 from '../assets/images/about-3.jpg'
import about_4 from '../assets/images/about-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

export default function AboutSection() {
  useEffect(() => {
    AOS.init({duration: 1000, delay:300, once:true})
  },[])

  return (
    <>
      <Container fluid className='p-5 my-5'>
        <Row className='d-flex flex-lg-row align-items-center g-5'>
      {/* LEFT SIDE */}
          <Col md={6}>
            <Row className='g-3'>
              <Col md={6} sm={6} xs={6} className='text-end' data-aos="zoom-in" data-aos-delay="50">
                <Image src={about_1} fluid className='w-100' />
              </Col>
              <Col md={6} sm={6} xs={6} className='text-start' data-aos="zoom-in" data-aos-delay="60">
                <Image src={about_2} fluid className='w-75' style={{marginTop: "25%"}} />
              </Col>
              <Col md={6} sm={6} xs={6} className='text-end' data-aos="zoom-in" data-aos-delay="70">
                <Image src={about_3} fluid className='w-75 text-end' />
              </Col>
              <Col md={6} sm={6} xs={6} data-aos="zoom-in" data-aos-delay="80"> 
                <Image src={about_4} fluid  className='w-100'/>
              </Col>
            </Row>
          </Col>
        {/* RIGHT SIDE */}
          <Col md={6}>
          <h1>Welcome to <span><FontAwesomeIcon icon={faUtensils} className='text-primary'/> Restoran</span></h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <Row>
            <Col className='d-flex'>
              <h1 className='fw-bold text-primary border-start border-5 border-primary ps-3'>15</h1>
              <div className='px-4'>
                <p className='mb-0'>Years of</p>
                <h6>EXPERIENCE</h6>
              </div>
            </Col>
            <Col className='d-flex'>
              <h1 className='fw-bold text-primary border-start border-5 border-primary ps-3'>15</h1>
              <div className='px-4'>
                <p className='mb-0'>Years of</p>
                <h6>EXPERIENCE</h6>
              </div>
            </Col>
          </Row>
          <Button className='px-5 py-3'>BOOK A TABLE</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
