import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'

export default function Login({isVisible, onClose}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isActive, setIsActive] = useState(false)
  
    useEffect(() => {
        if(email == '' && password == '') {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    })
  return (
    <>
    <Modal show={isVisible} onHide={onClose}>
        <Modal.Header closeButton className='py-2 px-4'>
            <h1>Login</h1>
        </Modal.Header>
        <Container className='p-3'>
            <Form>
                <Form.Group id='Email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type='email' 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </Form.Group>

                <Form.Group id='Email'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </Form.Group>
                {isActive 
                ?
                <Button type='submit' variant='primary'>Login</Button>
                :
                <Button type='submit' disabled variant='primary'>Login</Button>

                }
            </Form>
        </Container>    
    </Modal>
    </>
  )
}
