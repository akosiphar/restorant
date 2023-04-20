import React, { useEffect, useRef, useState } from 'react'
import { Container, Button, Placeholder, Card, Fade, Image, Row, Col, Tab, Tabs, TabContainer, TabPane, Nav, ListGroup, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './pageStyles/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUtensils, faHeadset, faCartPlus, faCoffee, faBurger} from '@fortawesome/free-solid-svg-icons'

//images
import heroImage from '../assets/images/hero.png'
import about_1 from '../assets/images/about-1.jpg'
import about_2 from '../assets/images/about-2.jpg'
import about_3 from '../assets/images/about-3.jpg'
import about_4 from '../assets/images/about-4.jpg'
import menu_1 from '../assets/images/menu-1.jpg'
import menu_2 from '../assets/images/menu-2.jpg'
import menu_3 from '../assets/images/menu-3.jpg'
import menu_4 from '../assets/images/menu-4.jpg'
import menu_5 from '../assets/images/menu-5.jpg'
import menu_6 from '../assets/images/menu-6.jpg'
import menu_7 from '../assets/images/menu-7.jpg'
import menu_8 from '../assets/images/menu-8.jpg'
import video from '../assets/images/video.jpg'

export default function HomePage() {
  return (
    <>
    <Container fluid className='hero-image d-flex align-items-center justify-content-around' style={{height: '95vh'}}>
        <div className='text-light w-50 ps-5'>
            <h1 className='display-3'>Enjoy Our Delicious Meal</h1>
            <p className='fs-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <Button className='p-3 w-25 fs-4 fw-bold text-light'>BOOK A TABLE</Button>
        </div>
        <div className='w-50 text-center overflow-hidden'>
            <Image src={heroImage} className='w-75 hero-spin'/>
        </div>
    </Container>
    <Container fluid className='p-5'>
        {/* Cards */}
            <Container fluid className='px-5'>
            <Row className='g-4'>
                <Col lg={3} sm={6}>
                    <Card className='card-hover border rounded-0 border-0 p-3'>
                        <Card.Body>
                        <FontAwesomeIcon icon={faUserTie} size='2xl' className='icon mb-3'/>
                            <h5>Master Chefs</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} sm={6}>
                    <Card className='card-hover border rounded-0 border-0 p-3'>
                        <Card.Body>
                            <FontAwesomeIcon icon={faUtensils} size='2xl' className='icon mb-3' />
                            <h5>Quality Food</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} sm={6}>
                    <Card className='card-hover border rounded-0 border-0 p-3'>
                        <Card.Body>
                            <FontAwesomeIcon icon={faCartPlus} size="2xl" className='icon mb-3'/>
                            <h5>Online Order</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} sm={6}>
                    <Card className='card-hover border rounded-0 border-0 p-3'>
                        <Card.Body>
                            <FontAwesomeIcon icon={faHeadset} size="2xl" className='icon mb-3'/>
                            <h5>24/7 Service</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        {/* About Me */}
            <Container className='d-flex' style={{marginTop: "6rem"}}>
                <Row className='g-5 align-items-center'>
                    {/* image holder */}
                    <Col lg={6}>
                        <Row className='g-3'>
                            <Col lg={6} sm={6} className='text-end'>
                                <Image src={about_1} className='w-100'  fluid/>
                            </Col>
                            <Col lg={6} sm={6} className='text-start' style={{marginTop: "14.5%"}}>
                                <Image src={about_2} className='w-75'  fluid/>
                            </Col>
                            <Col lg={6} sm={6} className='text-end'>
                                <Image src={about_3} className='w-75' fluid/>
                            </Col>
                            <Col lg={6} sm={6} className='text-start'>
                                <Image src={about_4} className='w-100' fluid/>
                            </Col>
                        </Row>
                    </Col>
                    {/* about holder */}
                    <Col lg={6}>
                        <h3 className='text-primary position-relative section-border text-start'>About Us</h3>
                        <p className='h1'>Welcome to <span>
                            <FontAwesomeIcon icon={faUtensils} color='#FEA11D'/>
                        </span> Restoran</p>
                        <p className='mb-4'>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </p>
                        <p className='mb-4'>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <Row>
                            <Col sm={6}>
                                <div className='d-flex flex-row align-items-center border-start border-primary border-5 px-3'>
                                    <p className='h1 flex-shrink-0 text-primary mb-0'>
                                        15
                                    </p>
                                <div className='ps-4'>
                                    <p className='mb-0'>Years of</p>
                                    <h6>Experience</h6>
                                </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className='d-flex flex-row align-items-center border-start border-primary border-5 px-3'>
                                    <p className='h1 flex-shrink-0 text-primary mb-0'>
                                        15
                                    </p>
                                <div className='ps-4'>
                                    <p className='mb-0'>Years of</p>
                                    <h6>Experience</h6>
                                </div>
                                </div>
                            </Col>
                        </Row>
                        <Button variant='primary' className='py-3 px-5 fw-bold mt-3'>Read More</Button>
                    </Col>
                </Row>
            </Container>
        {/* Food Menu */}
        <Container fluid className='text-center' style={{marginTop: "5rem"}}>
            <Row className='justify-content-center'>
                <Col className='w-50'>
                    <h3 className='section-border position-relative text-primary'>Food Menu</h3>
                    <p className='h1 mb-5'>Most Popular Items</p>
                </Col>
            </Row>

            <TabContainer id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col>
                    <Nav variant='tabs' className="border-primary d-inline-flex justify-content-center border-bottom mb-5">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className='d-flex align-items-center '>
                                <FontAwesomeIcon icon={faCoffee} className='me-3' style={{fontSize: "2rem"}}/>
                                <div className='text-secondary'>
                                    <p className='mb-0'>Popular</p>
                                    <h6>Breakfast</h6>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" className=' d-flex align-items-center'>
                                <FontAwesomeIcon icon={faBurger} className='me-3' style={{fontSize: "2rem"}}/>
                                <div className='text-secondary'>
                                    <p className='mb-0'>Special</p>
                                    <h6>Lunch</h6>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" className=' d-flex align-items-center'>
                                <FontAwesomeIcon icon={faUtensils} className='me-3' style={{fontSize: "2rem"}}/>
                                <div className='text-secondary'>
                                    <p className='mb-0'>Lovely</p>
                                    <h6>Dinner</h6>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Row sm={9}>
                    <Tab.Content> 
                        <Tab.Pane eventKey="first">
                        <Row>
                            <Col>
                                <ListGroup variant='flush' className='text-start'>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_1} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_2} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_3} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_4} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup variant='flush' className='text-start'>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_1} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_2} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_3} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_4} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            <Col>
                                <ListGroup variant='flush' className='text-start'>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_1} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_2} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_3} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_4} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup variant='flush' className='text-start'>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_1} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_2} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_3} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_4} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            <Col>
                                <ListGroup variant='flush' className='text-start'>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_1} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_2} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_3} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_4} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup variant='flush' className='text-start'>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_1} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_2} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_3} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-flex align-items-center'>
                                    <Image fluid src={menu_4} className='flex-shrink-0 rounded' style={{width: "80px"}}/>
                                        <div className='w-100 ps-4'>
                                            <h5 className='d-flex justify-content-between mb-0'>Chicken Burger <span className='text-primary fw-bold'>$115</span></h5>
                                            <hr className='my-3'/>
                                            <p className='small'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Row>
                </Row>
            </TabContainer>
        </Container>

        {/* Reservation */}
        <Container fluid className='d-flex mt-5'>
            <div>
                <Image src={video} />
            </div>
            <div className='bg-secondary w-100 p-4'>
                <div className='mx-auto px-5 py-3'>
                    <h3 className='section-border text-start text-primary'>Reservation</h3>
                    <p className='h1 text-white mb-4'>Book a Table Online</p>
                    <Form>
                    <Row>
                        <Col xl={6}>
                            <FormGroup controlId='Name' className='form-floating'>
                                <FormControl
                                type='text'
                                placeholder='Your Name'
                                />
                                <FormLabel>Your Name</FormLabel>
                            </FormGroup>
                        </Col>
                        <Col xl={6}>
                            <FormGroup controlId='Email' className='form-floating'>
                                <FormControl
                                type='email'
                                placeholder='Your Email'
                                required
                                />
                                <FormLabel>Your Email</FormLabel>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <FormGroup controlId='Email' className='form-floating'>
                                <FormControl
                                type='date'
                                required
                                />
                                <FormLabel>Date</FormLabel>
                            </FormGroup>
                        </Col>
                        <Col xl={6}>
                        <FormGroup controlId='Option' className='form-floating'>
                            <Form.Select aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <FormLabel>No. of People</FormLabel>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup controlId='Email' className='form-floating'>
                                <FormControl
                                as="textarea"
                                rows={3}
                                style={{height : "100%"}}
                                />
                                <FormLabel>Special Request</FormLabel>
                            </FormGroup>
                            <Button className='text-white fw-bold fs-4 py-2 w-100'>Book Now</Button>
                        </Col>
                    </Row>
                    </Form>
                </div>
            </div>
        </Container>
    </Container>
    </>
  )
}
