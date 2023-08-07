import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';

class Header extends Component {
  titles = [];
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <header id="header" style={{ display: "block", minHeight: "100vh" }}>
      <header id="header" style={{ display: 'block' }}>
        <Box>
          {console.log(this.props)}
          <div
            className="row aligner"
            style={{
              height: '50%',
              alignContent: 'center',
              left: '0',
              top: '0',
            }}
          >
            <div className="bg"></div>
            <div className="star-field">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </Box>
      </header>
    );
  }
}

export default Header;
