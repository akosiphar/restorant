import { faBurger, faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Image, ListGroup, Nav, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

// Menu Images
import menu_1 from '../assets/images/menu-1.jpg'
import menu_2 from '../assets/images/menu-2.jpg'
import menu_3 from '../assets/images/menu-3.jpg'
import menu_4 from '../assets/images/menu-4.jpg'
import menu_5 from '../assets/images/menu-5.jpg'
import menu_6 from '../assets/images/menu-6.jpg'
import menu_7 from '../assets/images/menu-7.jpg'
import menu_8 from '../assets/images/menu-8.jpg'

export default function FoodMenu() {
  return (
    <>
      <Container fluid className='px-5' >
        <div className='text-center mb-5'>
          <p className='mb-1 fs-3 fw-bold text-primary'>Food Menu</p>
          <h1>Most Popular Items</h1>
        </div>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
      <Row className='text-center'>
        <Col>
          <Nav variant="tabs" className="flex-row d-inline-flex mb-5">
            <Nav.Item>
              <Nav.Link eventKey="first" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faCoffee} style={{fontSize: "2.5rem", marginRight: ".5rem"}}/>
                <div>
                  <p className='mb-0'>Popular</p>
                  <p className='h6'>Breakfast</p>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faBurger} style={{fontSize: "2.5rem", marginRight: ".5rem"}}/>
                <div>
                  <p className='mb-0'>Popular</p>
                  <p className='h6'>Breakfast</p>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faUtensils} style={{fontSize: "2.5rem", marginRight: ".5rem"}}/>
                <div>
                  <p className='mb-0'>Popular</p>
                  <p className='h6'>Breakfast</p>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={12}>
          <TabContent>
            <TabPane eventKey="first">
              <Row>
                <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_2} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_3} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_4} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_5} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_6} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_7} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_8} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane eventKey="second">
              <Row>
                <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane eventKey="third">
              <Row>
                <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-flex align-items-center'>
                      <Image src={menu_1} fluid rounded className='me-4' style={{width: "80px"}}/>
                      <div className='w-100 text-start'>
                        <h5 className='d-flex justify-content-between'>
                        <span>Chicken Burger</span>
                        <span className='text-primary'>$115</span></h5>
                        <hr />
                        <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </TabContainer>
      </Container>
    </>
  )
}
