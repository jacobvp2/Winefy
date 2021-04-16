import React from 'react'
import { Link } from "react-router-dom";
import Navigation from '../Components/Navigation'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Landing = () => {
    return (
        <div>
            <Navigation />
           <Image src="Dark-Red-Square-300x300.jpg" fluid />
           <Container fluid>
                    <Row className="justify-content-md-center">
                        <Link to='/choice'><Button variant="danger" size="lg">
                    Find Your Wine!
                    </Button>{' '}</Link>
                    </Row>
                    </Container>
         
        </div>
    )
}

export default Landing
