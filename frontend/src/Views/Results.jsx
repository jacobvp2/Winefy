import React from 'react'
import { Link } from "react-router-dom";
import Navigation from '../Components/Navigation'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'


const Landing = () => {
    return (
        <div>
            <Navigation />
           <CardDeck className="justify-content-md-center">
             
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Wine 1</Card.Title>
                  <Card.Text>
                    This card will show the user their first wine result.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Red Wine</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Wine 2</Card.Title>
                  <Card.Text>
                    This card will show the user their second wine result.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">White Wine</small>
                </Card.Footer>
              </Card>
            </CardDeck>
         
        </div>
    )
}

export default Landing
