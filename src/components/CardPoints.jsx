import { faCartPlus, faHeadset, faUser, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import AOS from 'aos' // Animation On Screen

export default function CardPoints() {
  useEffect(() => {
    AOS.init({duration: 1000, delay:300, once:true, offset:300})
  },[])

  return (
    <>
      <Container fluid className='d-md-flex d-inline-flex gap-4 mt-5 px-5 flex-lg-nowrap flex-wrap'>
        <Card.Body className='w-50 h-50 card-hover p-4' data-aos="fade-up" data-aos-delay="50">
          <FontAwesomeIcon icon={faUserTie} className='mb-3' style={{fontSize: "4rem"}}/>
          <h5>Master Chefs</h5>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </Card.Body>
        <Card.Body className='w-50 h-50 card-hover p-4' data-aos="fade-up" data-aos-delay="150">
          <FontAwesomeIcon icon={faUtensils} className='mb-3' style={{fontSize: "4rem"}}/>
          <h5>Master Chefs</h5>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </Card.Body>
        <Card.Body className='w-50 h-50 card-hover p-4' data-aos="fade-up" data-aos-delay="250">
          <FontAwesomeIcon icon={faCartPlus} className='mb-3' style={{fontSize: "4rem"}}/>
          <h5>Master Chefs</h5>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </Card.Body>
        <Card.Body className='w-50 h-50 card-hover p-4' data-aos="fade-up" data-aos-delay="350">
          <FontAwesomeIcon icon={faHeadset} className='mb-3' style={{fontSize: "4rem"}}/>
          <h5>Master Chefs</h5>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </Card.Body>
      </Container>
    </>
  )
}
