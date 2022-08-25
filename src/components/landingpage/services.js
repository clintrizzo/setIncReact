import React, { Component } from 'react';
import Card from '../cards/servicesCards.js'

class Services extends Component {
  render() {
    return(
      <div id="services">
        <center>
          <h3 className='servicesOffered'>Services We Offer</h3>
          <hr style={{borderTop: '3px solid red',  width: '85%'}}/>
        </center>
        <Card />
      </div>
    )
  }
}

export default Services;
