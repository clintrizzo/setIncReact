import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutus extends Component {
  render() {
    return(
      <div id="missionStatement">
      <Grid style={{paddingTop: '30px'}}>
        <Cell className='resume-left-col' col={6} style={{borderRadius:"60px"}}>
          <center>
          <img src="./images/me.jpg" alt="clintRizzo" className='me' id='frontImage'></img>
          </center>
          <h3 className='position'>Full Stack Web Developer</h3>
          <center>
          <hr style={{borderTop: '3px solid #e22947',  width: '85%'}}/>
          </center>
          <p className='developerStory'>Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and persistent problem-solver. Excellent communicator with effective client relationship building skills. Earned a Certificate in Full-Stack Web Development from the University of CA-Irvine with the goal of becoming a skilled Web Developer. Languages learned were HTML/CSS, Javascript, Node, Express, and React. Main goal in becoming a successful Web Developer is to continue learning as much as possible to become an essential asset to any team. Because of the skills learned through the bootcamp and personal background any task given will be completed.
          </p>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
          <br></br>
          <h3 className='info'>Coding Languages:</h3>
          <br></br>
          <h5 className='languageInfo'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</h5>
          <br></br>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
          <h5 className='info'>Address:</h5>
          <p className='answer'>Corona, California</p>
          <h5 className='info'>Phone:</h5>
          <p className='answer'>(951) 288-2247</p>
          <h5 className='info'>Email:</h5>
          <p className='answer'>clint.rizzo92@gmail.com</p>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
        </Cell>
        <Cell className='resume-left-col' col={6} style={{borderRadius:"60px"}}>
          <center>
          <img src="./images/me.jpg" alt="clintRizzo" className='me' id='frontImage'></img>
          </center>
          <h3 className='position'>Full Stack Web Developer</h3>
          <center>
          <hr style={{borderTop: '3px solid #e22947',  width: '85%'}}/>
          </center>
          <p className='developerStory'>Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and persistent problem-solver. Excellent communicator with effective client relationship building skills. Earned a Certificate in Full-Stack Web Development from the University of CA-Irvine with the goal of becoming a skilled Web Developer. Languages learned were HTML/CSS, Javascript, Node, Express, and React. Main goal in becoming a successful Web Developer is to continue learning as much as possible to become an essential asset to any team. Because of the skills learned through the bootcamp and personal background any task given will be completed.
          </p>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
          <br></br>
          <h3 className='info'>Coding Languages:</h3>
          <br></br>
          <h5 className='languageInfo'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</h5>
          <br></br>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
          <h5 className='info'>Address:</h5>
          <p className='answer'>Corona, California</p>
          <h5 className='info'>Phone:</h5>
          <p className='answer'>(951) 288-2247</p>
          <h5 className='info'>Email:</h5>
          <p className='answer'>clint.rizzo92@gmail.com</p>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Aboutus;
