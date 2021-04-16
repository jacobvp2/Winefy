import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from '../Components/Navigation'

const Twitter = ({ username, setUsername }) => {

    const updateUsername = (e) => {
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <Navigation />
            <div className='d-flex justify-content-center vh-100'>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Input Your Twitter Handle</Card.Title>
                        <Form onChange={updateUsername}>
                            <Form.Group>
                                <Form.Label>Twitter Handle:</Form.Label>
                                <Form.Control type="text" placeholder="@johndoe123" value={username}/>
                            </Form.Group>
                        </Form>
                        <div className='d-flex justify-content-between'>
                            <Link to='/choice'><Button variant="outline-danger" size='sm'>Back</Button></Link>
                            <Link to='/results'><Button variant="primary" size='sm' onClick={() => alert(username)}>Submit</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Twitter
