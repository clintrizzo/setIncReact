import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

  const Licenses = () => (
    <div className='licenses'>
        <Row>
          <Col>
        <hr style={{borderTop: '3px solid red',  width: '100%', marginBottom: '35px'}}/>
        <center>
        <img src="./images/licenses/license01.png" alt="license01" className='licenseImage' id='licenseMedia' />
        <img src="./images/licenses/license02.png" alt="license02" className='licenseImage' id='licenseMedia' />
        <img src="./images/licenses/license03.png" alt="license03" className='licenseImage' id='licenseMedia' />
        <img src="./images/licenses/license04.png" alt="license04" className='licenseImage' id='licenseMedia' />
        <img src="./images/licenses/license05.png" alt="license05" className='licenseImage' id='licenseMedia' />
        <img src="./images/licenses/license06.png" alt="license06" className='licenseImage' id='licenseMedia' />
        </center>
        </Col>
        </Row>
      </div>
  );
export default Licenses;
