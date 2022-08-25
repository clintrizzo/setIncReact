import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './card.css';

function ServicesCards() {
  return (
    <div>
      <Row>
        <Col>
          <CardGroup>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                    <center>
                      <Card.Img style={{width: '350px', height: '260px', marginTop: '10px', borderRadius: '10px'}} variant="top" src="./images/electricalServices/building_automation.png" />
                      </center>
                    <Card.Body>
                      <center>
                        <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                        </center>
                        <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                        Hover For Details
                    </Card.Body>
                  </Card>
                </div>
                <div class="flip-box-back">
                  <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                  <Card.Body>
                    <center>
                      <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                      </center>
                      <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      <Card.Text className='reviewText'>
                        Installation & Commissioning of controllers, wiring and peripherals.
                        Experience Includes: DELTA CONTROLS, SIEMENS, SCHNEIDER ELECTRIC & TRANE.
                      </Card.Text>
                      <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                      <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                      </Button>{' '}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                  <center>
                    <Card.Img style={{width: '350px', height: '260px', marginTop: '10px', borderRadius: '10px'}} variant="top" src="./images/electricalServices/building_automation.png" />
                  </center>
                  <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                  </center>
                  <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                  Hover For Details
                  </Card.Body>
                </Card>
              </div>
              <div class="flip-box-back">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                  </center>
                  <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                  <Card.Text className='reviewText'>
                    Installation & Commissioning of controllers, wiring and peripherals.
                    Experience Includes: DELTA CONTROLS, SIEMENS, SCHNEIDER ELECTRIC & TRANE.
                  </Card.Text>
                  <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                    <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                  </Button>{' '}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </CardGroup>
    </Col>
  </Row>

  <br />

      <Row style={{marginTop: '125px'}}>
        <Col>
        <CardGroup>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                  <center>
                    <Card.Img style={{width: '350px', height: '260px', marginTop: '10px', borderRadius: '10px'}} variant="top" src="./images/electricalServices/building_automation.png" />
                    </center>
                  <Card.Body>
                    <center>
                      <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                      </center>
                      <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      Hover For Details
                  </Card.Body>
                </Card>
              </div>
              <div class="flip-box-back">
                <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                    </center>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                    <Card.Text className='reviewText'>
                      Installation & Commissioning of controllers, wiring and peripherals.
                      Experience Includes: DELTA CONTROLS, SIEMENS, SCHNEIDER ELECTRIC & TRANE.
                    </Card.Text>
                    <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                    <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                    </Button>{' '}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <center>
                  <Card.Img style={{width: '350px', height: '260px', marginTop: '10px', borderRadius: '10px'}} variant="top" src="./images/electricalServices/building_automation.png" />
                </center>
                <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                Hover For Details
                </Card.Body>
              </Card>
            </div>
            <div class="flip-box-back">
            <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
              <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                <Card.Text className='reviewText'>
                  Installation & Commissioning of controllers, wiring and peripherals.
                  Experience Includes: DELTA CONTROLS, SIEMENS, SCHNEIDER ELECTRIC & TRANE.
                </Card.Text>
                <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                  <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                </Button>{' '}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </CardGroup>
        </Col>
      </Row>

      <br />

      <Row style={{marginTop: '125px'}}>
        <Col>
        <CardGroup>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                  <center>
                    <Card.Img style={{width: '350px', height: '260px', marginTop: '10px', borderRadius: '10px'}} variant="top" src="./images/electricalServices/building_automation.png" />
                    </center>
                  <Card.Body>
                    <center>
                      <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                      </center>
                      <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      Hover For Details
                  </Card.Body>
                </Card>
              </div>
              <div class="flip-box-back">
                <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                    </center>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                    <Card.Text className='reviewText'>
                      Installation & Commissioning of controllers, wiring and peripherals.
                      Experience Includes: DELTA CONTROLS, SIEMENS, SCHNEIDER ELECTRIC & TRANE.
                    </Card.Text>
                    <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                    <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                    </Button>{' '}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <center>
                  <Card.Img style={{width: '350px', height: '260px', marginTop: '10px', borderRadius: '10px'}} variant="top" src="./images/electricalServices/building_automation.png" />
                </center>
                <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                Hover For Details
                </Card.Body>
              </Card>
            </div>
            <div class="flip-box-back">
            <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
              <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                <Card.Text className='reviewText'>
                  Installation & Commissioning of controllers, wiring and peripherals.
                  Experience Includes: DELTA CONTROLS, SIEMENS, SCHNEIDER ELECTRIC & TRANE.
                </Card.Text>
                <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                  <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                </Button>{' '}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </CardGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ServicesCards;
