import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return(
      <div className='testimonials'>
        <hr style={{borderTop: '3px solid red',  width: '100%'}}/>
        <center>
          <h4 className='customerWords'>Testimonials</h4>
          <p>A few words from our previous and current clients.</p>
        </center>
      </div>
    )
  }
}

export default Testimonials;
