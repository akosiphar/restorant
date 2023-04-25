import React, { useEffect, useRef, useState } from 'react'
import { Container, Button, Placeholder, Card, Fade, Image, Row, Col, Tab, Tabs, TabContainer, TabPane, Nav, ListGroup, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './pageStyles/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUtensils, faHeadset, faCartPlus, faCoffee, faBurger} from '@fortawesome/free-solid-svg-icons'

//images
import heroImage from '../assets/images/hero.png'

import video from '../assets/images/video.jpg'
import CardPoints from '../components/CardPoints'
import AboutSection from '../components/AboutSection'
import FoodMenu from '../components/FoodMenu'

export default function HomePage() {

return (
      <>
      {/* HERO SECTION START */}
      <Container fluid className='hero-image py-5'>
         <Container fluid className='py-5'>
            <Row className='align-items-center justify-content-md-center g-5'>
               <Col md={6} xxl={5}>
                  {/* text and button */}
                     <div className='text-white text-md-start text-center'>
                        <h1 className='fw-bold display-3'>Enjoy Our Delicious Meal</h1>
                        <p className='w-100 w-md-75 fs-5 mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <Button className='fs-4 px-5 py-2 text-white' >BOOK A TABLE</Button>
                     </div>
               </Col>
               <Col md={6} className='text-center'>
                  {/* rotating image */}
                     <div className='overflow-hidden'>
                        <Image src={heroImage} fluid className='hero-spin'/>
                     </div>
               </Col>
            </Row>
         </Container>
      </Container>
      {/* HERO SECTION END */}

      <CardPoints />

      <AboutSection />

      <FoodMenu />
      </>
   )
}
