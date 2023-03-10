import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class Navigation extends Component {
  render() {
      if (this.props.projectData) {
      var name = this.props.projectData.name;
      this.titles = this.props.projectData.titles; //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return this.titles
    }, (props, prevProp) => true);

    return (
      <Navbar>
              <Nav activeKey="/home" fill style={{ position: 'absolute', top: 10, right: 10 }}>
</Nav>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                {name}
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>

            </div>
          </div>
        </div>
      </Navbar>
    )
  }
}
