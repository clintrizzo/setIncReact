import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './card.css';

function TestimonialCards() {
  return (
    <div>
      <Row>
        <Col>
          <CardGroup>
            <Card id='cardBorder' style={{margin: '5px', borderRadius: '15px', backgroundColor: 'grey'}}>
              <Card.Body>
                <Card.Text className='reviewText'>
                  "S.E.T. INC, has been one of the most professional and personable electrical contractors I’ve had the pleasure to work with.
                  Their attention to detail and ability to finish the job correctly the first time have made them an invaluable asset to completing
                  my projects successfully and on time."
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <center>
                <small><bold className='owner'>Jeremy Ediger</bold> <br />Operations Manager, <br />Advantage 1 Solutions</small>
                <br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </center>
              </Card.Footer>
            </Card>
            <Card style={{margin: '5px', borderRadius: '15px', backgroundColor: 'grey'}}>
              <Card.Body>
                <Card.Text className='reviewText'>
                  "I hired Strategic Electrical Technologies to handle multiple high voltage projects at my facility.
                  The quality of their work and expertise in electrical (and related areas) is world class.
                  I would highly recommend them to friends and family, or other business who need an excellent electrician."
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <center>
                <small><bold className='owner'>Peter Phillips</bold> <br />General Manager, <br />Stor-Mor Self Storage</small>
                <br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </center>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <br />
      <Row style={{marginTop: '-20px'}}>
        <Col>
          <CardGroup>
            <Card style={{margin: '5px', borderRadius: '15px', backgroundColor: 'grey'}}>
              <Card.Body>
                <Card.Text className='reviewText'>
                  "In over 25 years of being involved in the construction industry including being a State Building Inspector for the State of
                  California, I’ve never worked with a better Electrical Company then Strategic Electrical Technologies Inc. They’re definitely
                  a cut above contractor that pays attention to detail."
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <center>
                <small><bold className='owner'>Trevor Mason</bold> <br />President, <br />T.Mason Construction</small>
                <br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </center>
              </Card.Footer>
            </Card>
            <Card style={{margin: '5px', borderRadius: '15px', backgroundColor: 'grey'}}>
              <Card.Body>
                <Card.Text className='reviewText'>
                  "S.E.T. Inc. emulates impeccable customer service, care, and professionalism. They were fast to reply, repair, and restore
                  the electrical work in my home within hours. If you are in need of any electrical work in Southern California, this is who
                  you should call immediately! Thank you so much to S.E.T. Inc. for your overall performance of superior standards!"
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <center>
                <small><bold className='owner'>Kara Lucas</bold> <br />Satisfied Customer, <br />Home Owner</small>
                <br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </center>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
}

export default TestimonialCards;
