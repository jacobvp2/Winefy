import React from 'react'
import { Link, useParams } from "react-router-dom";
import Navigation from '../Components/Navigation'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { wineMap } from '../Util/WineMap'


const Landing = () => {
  let { id } = useParams();

    return (
        <div>
            <Navigation />
            <div className='container pt-5'>
           <CardDeck className="justify-content-md-center">
             
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{wineMap[id]['red']['name']}</Card.Title>
                  <Card.Text>
                    {wineMap[id]['red']['desc']}
                    <br />
                    <br />
                    {wineMap[id]['red']['why']}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Red Wine</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{wineMap[id]['white']['name']}</Card.Title>
                  <Card.Text>
                    {wineMap[id]['white']['desc']}
                    <br />
                    <br />
                    {wineMap[id]['white']['why']}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">White Wine</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            
            </div>
         
        </div>
    )
}

export default Landing
