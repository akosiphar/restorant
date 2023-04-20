import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Login() {
  return (
    <>
        <Container className='w-50 my-5'>
            <Form>
            <h1>Login</h1>
                <Form.Group id='Email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type='email' 
                    placeholder='Email'
                    required
                    />
                </Form.Group>

                <Form.Group id='Email'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type='password' 
                    placeholder='Password'
                    required
                    />
                </Form.Group>

                <Button type='submit' variant='primary'>Register</Button>
            </Form>
        </Container>    
    </>
  )
}
