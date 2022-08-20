import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Merchandise extends Component {
  render() {
    return(
      <div id="missionStatement">
      <Grid style={{paddingTop: '30px'}}>
        <Cell className='resume-left-col' col={12} style={{borderRadius:"60px"}}>
          <h1>Hello World </h1>
          <h1>Hello World </h1>
          <h1>Hello World </h1>
          <h1>Hello World </h1>
          <h1>Hello World </h1>
          <h1>Hello World </h1>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Merchandise;
