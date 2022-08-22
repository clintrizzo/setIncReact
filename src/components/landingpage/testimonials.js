import React, { Component } from 'react';
import Card from '../cards/testimonialCards.js'
class Testimonials extends Component {
  render() {
    return(
      <div className='testimonials'>
        <hr style={{borderTop: '3px solid red',  width: '100%'}}/>
        <center>
          <h3 className='customerWords'>Testimonials</h3>
        </center>
        <Card />
      </div>
    )
  }
}

export default Testimonials;
