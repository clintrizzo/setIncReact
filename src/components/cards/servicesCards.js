import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './card.css';

class ServicesCards extends Component {
  render() {
    return(
    <div>
      <Row>
        <Col>
          <CardGroup style={{marginTop:'-100px'}}>
            <div className="flip-box" id="flip-box-id">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                    <center>
                      <Card.Img className='serviceImage' id='serviceImageMobile' alt='services01' variant="top" src="./images/electricalServices/building_automation.png" />
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
                <div className="flip-box-back" id="flip-box-back-id">
                  <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                  <Card.Body>
                    <center>
                      <Card.Title style={{color:'#990000'}}>BUILDING AUTOMATION & ENERGY MANGEMENT SYSTEMS</Card.Title>
                      </center>
                      <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      <Card.Text className='reviewText' style={{marginBottom: '40px'}}>
                        Installation & Commissioning of controllers, wiring and peripherals.
                        Experience Includes: DELTA CONTROLS, SIEMENS, SCHNEIDER ELECTRIC & TRANE.
                      </Card.Text>
                      <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                      <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                      </Button>{' '}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="flip-box" id="flip-box-id">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                  <center>
                    <Card.Img className='serviceImage' id='serviceImageMobile' alt='services02' variant="top" src="./images/electricalServices/title_24.png" />
                    </center>
                  <Card.Body>
                    <center>
                      <Card.Title style={{color:'#990000'}}>TITLE 24 ACCEPTANCE TESTING & INSTALLATION</Card.Title>
                      </center>
                      <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      Hover For Details
                  </Card.Body>
                </Card>
              </div>
              <div className="flip-box-back" id="flip-box-back-id">
                <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>TITLE 24 ACCEPTANCE TESTING & INSTALLATION</Card.Title>
                    </center>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                    <Card.Text className='reviewText' style={{marginBottom: '40px'}}>
                      Certified Employer and Employees through CALCTP.
                      Installation experience includes: nLIGHT, WATTSTOPPER & GREENGATE.
                    </Card.Text>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
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

  <Row>
    <Col>
      <CardGroup>
        <div className="flip-box" id="flip-box-id">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <center>
                  <Card.Img className='serviceImage' id='serviceImageMobile' alt='services03' variant="top" src="./images/electricalServices/public_works.png" />
                </center>
                <Card.Body>
                    <center>
                      <Card.Title style={{color:'#990000'}}>PUBLIC WORKS</Card.Title>
                    </center>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      Hover For Details
                </Card.Body>
              </Card>
            </div>
            <div className="flip-box-back" id="flip-box-back-id">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>PUBLIC WORKS</Card.Title>
                    </center>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                    <Card.Text className='reviewText' style={{marginBottom: '40px'}}>
                      We are registered with the DEPARTMENT OF INDUSTRIAL RELATIONS to perform work on government funded jobs and
                      have completed work on numerous schools and Federal Buildings.
                    </Card.Text>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                    <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                    <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                    </Button>{' '}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="flip-box" id="flip-box-id">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <center>
                  <Card.Img className='serviceImage' id='serviceImageMobile' alt='services04' variant="top" src="./images/electricalServices/troubleshooting.png" />
                </center>
                <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>VARIABLE FREQUENCY DRIVES</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                Hover For Details
                </Card.Body>
              </Card>
            </div>
            <div className="flip-box-back" id="flip-box-back-id">
            <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
              <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>VARIABLE FREQUENCY DRIVES</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                <Card.Text className='reviewText' style={{marginBottom: '40px'}}>
                  Installation, replacement, troubleshooting and preventive maintenance. Certified start up for ABB
                  and YASKAWA drives. Experience Includes: ABB, YASKAWA, DANFOSS and more!
                </Card.Text>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
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

  <Row>
    <Col>
      <CardGroup>
        <div className="flip-box" id="flip-box-id">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <center>
                  <Card.Img className='serviceImage' id='serviceImageMobile' alt='services05' variant="top" src="./images/electricalServices/tenant_improvement.png" />
                </center>
                <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>TENANT IMPROVEMENT</Card.Title>
                  </center>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                      Hover For Details
                </Card.Body>
              </Card>
            </div>
            <div className="flip-box-back" id="flip-box-back-id">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <Card.Body>
                  <center>
                    <Card.Title style={{color:'#990000'}}>TENANT IMPROVEMENT</Card.Title>
                    </center>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                    <Card.Text className='reviewText' style={{marginBottom: '40px'}}>
                      Office space, medical facilities, restaurants and research labs/clean rooms.
                      We can also provide temporary power and lighting from existing panels or temporary power poles.
                    </Card.Text>
                    <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                    <Button active href='tel:9512882247' id='servicesPhoneNumber'>
                    <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                    </Button>{' '}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="flip-box" id="flip-box-id">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <Card id='cardBorder' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
                <center>
                  <Card.Img className='serviceImage' id='serviceImageMobile' alt='services06'  variant="top" src="./images/electricalServices/service_and_repair.png" />
                </center>
                <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>SERVICE AND REPAIR</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                Hover For Details
                </Card.Body>
              </Card>
            </div>
            <div className="flip-box-back" id="flip-box-back-id">
            <Card id='cardBord' style={{margin: '10px', borderRadius: '15px', backgroundColor: 'white'}}>
              <Card.Body>
                <center>
                  <Card.Title style={{color:'#990000'}}>SERVICE AND REPAIR</Card.Title>
                </center>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
                <Card.Text className='reviewText' style={{marginBottom: '40px'}}>
                  Preventive maintenance, lighting retrofits, lighting maintenance, new circuits, receptacle addition
                  or relocation, troubleshooting, site surveys, update panel schedules & more!
                </Card.Text>
                <hr style={{borderTop: '3px solid black',  width: '100%', marginBottom: '35px'}}/>
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
}

export default ServicesCards;
