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
                        <Card.Title>#{id}) Lorem Ipsum?</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Select one of the following</Card.Subtitle>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis fuga ea aliquid at nostrum earum odit facilis consectetur natus?
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <Link to={`${parseInt(id) - 1}`}>Previous</Link>
                            <Link to={`${parseInt(id) + 1}`}>Next</Link>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Quiz
