import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Button from 'react-bootstrap/Button';
import Licenses from './license.js'
import Testimonials from './testimonials.js'
import Services from './services.js'
class LandingPage extends Component {
  render() {
    return(
      <div id="missionStatement">
      <Grid style={{paddingTop: '30px', paddingBottom: '100px'}}>
        <Cell className='resume-left-col' id='aboutSetInc' col={6} style={{borderRadius:"25px"}}>
          <div className="float-container">
            <div className="float-child" id='float'>
              <div>
                <img src="./images/landingpage/team.png" alt="clintRizzo" className='setTeam' id='teamImage'></img>
              </div>
            </div>

            <div className="float-child" id='float'>
              <div>
                <center>
                  <h3 style={{color:'#990000'}} className='title'>S.E.T. Inc. USA</h3>
                  <br />
                    <p className='setincStatement'>Strategic Electrical Technolgies is an Orange County based Electrical Contractor.
                    Our mission is to provide quality and efficiency in every task performed.
                    From the simple Lighting Maintenance, to the more complex Energy Management Systems and Variable Frequency Drives.
                    The quality is apparent in the finished product.
                    </p>
                  <br />
                  <p>Nicky Wilson, <br /> General Manager</p>
                  <Button active href='tel:9512882247' id='phoneNumber'>
                    <p id='callNowText'>CALL NOW <br /> (714) 916-7327</p>
                  </Button>{' '}
                </center>
              </div>
            </div>
          </div>
          <Licenses />
          <Testimonials />
        </Cell>
        <Cell className='resume-left-col' id='aboutSetInc' className='mobileDisplay' col={6} style={{borderRadius:"25px"}}>
          <Services />
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default LandingPage;
