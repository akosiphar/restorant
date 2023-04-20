import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Register() {
  return (
    <Container className='w-50 my-5'>
    <Form>
    <h1>Register</h1>
        <Form.Group id='FirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='Enter your First Name'
            />
        </Form.Group>

        <Form.Group id='LastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='Enter your Last Name'
            />
        </Form.Group>
        <Form.Group id='Email'>
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type='email' 
            placeholder='Enter your email'
            required
            />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group id='Password'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='email' 
            placeholder='Enter your Password'
            required
            />
        </Form.Group>
        
        <Form.Group id='Password'>
            <Form.Label>Verify Password</Form.Label>
            <Form.Control 
            type='email' 
            placeholder='Re-enter your Password'
            required
            />
        </Form.Group>

        <Button type='submit' variant='primary'>Register</Button>
    </Form>
</Container>    
  )
}
