import React from "react";
import "./footer.css";

  const Footer = () => (
    <div className="footer">
      <img src='./images/footer/setinc-footer-log.png' alt='footerImg' className='footerImg'></img>
      <a rel="noopener noreferrer" target="_blank" id='text'>Strategic Electrical Technologies</a>
      <a href="https://www.instagram.com/setincusa/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-instagram" aria-hidden="true" id='links'/>
      </a>
      <a href="https://www.facebook.com/setincusa" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-facebook" aria-hidden="true" id='links'/>
      </a>
      <a href="https://www.linkedin.com/in/nicky-wilson-9b873089/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin" aria-hidden="true" id='links'/>
      </a>
      <a href="tel:">
        <i className="fa fa-phone" target="_self" aria-hidden="true" id='links'/>
      </a>
      <a href="mailto:">
        <i className="fa fa-envelope" target="_self" aria-hidden="true" id='links'/>
      </a>
    </div>
  );
export default Footer;
