import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Quiz = () => {
    let { id } = useParams();

    return (
        <div>
            <Link to='/'>Home</Link>
            <div className='d-flex justify-content-center vh-100'>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Question #{id}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to={`${parseInt(id) - 1}`}>Previous</Link>
                        <Link to={`${parseInt(id) + 1}`}>Next</Link>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Quiz
