import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from '../Components/Navigation'

const Choice = () => {
    return (
        <div>
            <Navigation/>
            <div className='d-flex justify-content-around vh-100 container flex-wrap'>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Take the Quiz!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">20 Multiple Choice Questions</Card.Subtitle>
                        <Card.Text>Take a short quiz to find what wine suits you the best based on your personality</Card.Text>
                        <Link to='/quiz/1'><Button variant="primary" className='float-right'>Go!</Button></Link>
                    </Card.Body>
                </Card>
                </div>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Use your Twitter!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">How does this work?</Card.Subtitle>
                        <Card.Text>Our algorithm determines your personality based on your public tweets. Our experts then determine what wine you would enjoy the best!</Card.Text>
                        <Link to='/twitter'><Button variant="primary" className='float-right'>Go!</Button></Link>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Choice
