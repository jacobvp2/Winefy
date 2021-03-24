import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from '../Components/Navigation'

const Quiz = ({ answers, setAnswers }) => {
    let { id } = useParams();
    const updateAnswers = (e) => {
        setAnswers((old) => ({
            ...old,
            [id]: e.target.value,
        }))
    }

    return (
        <div>
            <Navigation />
            <div className='d-flex justify-content-center vh-100'>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>#{id}) Lorem Ipsum?</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Select one of the following</Card.Subtitle>
                        <Form onChange={updateAnswers}>
                            <Form.Group>
                                <Form.Check 
                                    type={'radio'}
                                    name={id}
                                    id={`${id}A`}
                                    label='A'
                                    value='A'
                                    checked={answers[id] == 'A' && 'checked'}
                                />
                                <Form.Check 
                                    type={'radio'}
                                    name={id}
                                    id={`${id}B`}
                                    label='B'
                                    value='B'
                                    checked={answers[id] == 'B' && 'checked'}
                                />
                                <Form.Check 
                                    type={'radio'}
                                    name={id}
                                    id={`${id}C`}
                                    label='C'
                                    value='C'
                                    checked={answers[id] == 'C' && 'checked'}
                                />
                            </Form.Group>
                        </Form>
                        <div className='d-flex justify-content-between'>
                            {id > 1 ?
                                <Link to={`${parseInt(id) - 1}`}>Previous</Link> :
                                <Link to='/choice'><Button variant="outline-danger" size='sm'>Back</Button></Link>
                            }
                            {id < 10 ? 
                                <Link to={`${parseInt(id) + 1}`}>Next</Link> : 
                                <Link to={`${parseInt(id) + 1}`}><Button variant="primary" size='sm'>Submit</Button></Link>
                            }
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Quiz
