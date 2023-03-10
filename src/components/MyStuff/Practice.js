import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class Practice extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Col className='grid-cols-1 h-screen border-black'>Col 1</Col>
            <Col className='grid-cols-2 h-screen border-black'>Col 2</Col>
            <Col className='grid-cols-3 h-screen border-black'>Col 3</Col>
            <Col className='grid-cols-4 h-screen border-black'>Col 4</Col>
        </Row>
      </Container>
    )
  }
}

// class App extends Component {
//   titles = [];
//   constructor(props) {
//     super();
//     this.state = {
//       foo: "bar",
//       profileData: {},
//       projectData: {},
//     };
//   }

//   componentDidMount = () => {
//     this.loadProjectData("projects.json");
//     this.loadProfileData("profile.json");
//   };
//   loadProfileData = () => {
//     $.ajax({
//       url: `https://raw.githubusercontent.com/reedoooo/portfolio-prep/ec448c2d8401ec6dd2892d6ba5e7fca5a158d374/public/profile.json`,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState({ profileData: data });
//       }.bind(this),
//       error: function (xhr, status, err) {
//         console.log("Error loading profile data: ", err);
//         alert(err);
//       },
//     });
//   };

//   loadProjectData = () => {
//     $.ajax({
//       url: `https://raw.githubusercontent.com/reedoooo/portfolio-prep/ec448c2d8401ec6dd2892d6ba5e7fca5a158d374/public/projects.json`,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState(
//           { projectData: data },
//           () => (document.title = `${this.state.projectData.basic_info.name}`)
//         );
//       }.bind(this),
//       error: function (xhr, status, err) {
//         console.log("Error loading project data: ", err);
//         alert(err);
//       },
//     });
//   };

//   render() {
//     console.log(this.state.projectData);
//     console.log(this.state.profileData);

//     return (
//       <div className="MASTER-DIV">
//         <Header
//           profileData={this.state.profileData.basic_info}
//           projectData={this.state.projectData.basic_info}
//         />
//         <Main
//           profileData={this.state.profileData}
//           projectData={this.state.projectData}
//         />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
