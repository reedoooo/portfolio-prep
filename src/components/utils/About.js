// import React, { Component } from "react";
// import { Icon } from "@iconify/react";
// import Row from 'react-bootstrap/Row'

// import bootstrapIcon from "@iconify/icons-logos/bootstrap";
// import reactIcon from "@iconify/icons-logos/react";
// import css3Icon from "@iconify/icons-logos/css-3";
// import html5Icon from "@iconify/icons-logos/html-5";
// import nodejsIcon from "@iconify/icons-logos/nodejs";
// import vscodeIcon from "@iconify/icons-logos/visual-studio";
// import sqldepIcon from "@iconify/icons-logos/sqldep";
// import mongodbIcon from "@iconify/icons-logos/mongodb";
// import jqueryIcon from "@iconify/icons-logos/jquery";
// import bashIcon from "@iconify/icons-logos/bash";


// import { Col, Stack } from "react-bootstrap";

// class About extends Component {
//   render() {
//     if (this.props.sharedBasicInfo) {
//       var profilepic = "images/" + this.props.sharedBasicInfo.image;
//     }
//     if (this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.about;
//       var hello = this.props.resumeBasicInfo.description_header;
//       var about = this.props.resumeBasicInfo.description;
//     }

//     return (
//       <section id="about">
//         <div className="background">
//           <div className="transparentbox">
//             <Col id="portfolio">
//               <Stack direction="horizontal" gap={3}>
//                 <Row>
//                   <Col
//                     lg={12}
//                     className="aboutC"
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {hello}
//                     {about}
//                     <h1 style={{ color: "black" }}>
//                       <span>{sectionName}</span>
//                     </h1>

//                     <div className="col-md-6 mb-5 center">
//                       <div className="polaroid">
//                         <div className="slide-right">
//                           <div className="inner">
//                             <img
//                               height="250px"
//                               src={profilepic}
//                               alt="Avatar placeholder"
//                             />
//                           </div>
//                         </div>
//                         <Icon
//                           icon={bootstrapIcon}
//                           style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                         />
//                         <Icon
//                           icon={reactIcon}
//                           style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                         />
//                         <Icon
//                           icon={css3Icon}
//                           style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                         />
//                         <Icon
//                           icon={html5Icon}
//                           style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                         />
//                         <Icon
//                           icon={nodejsIcon}
//                           style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                         />
//                         <Icon
//                           icon={vscodeIcon}
//                           style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                         />
//                         <Icon
//                           icon={bashIcon}
//                           style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                         />
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//               </Stack>
//               <Stack direction="horizontal" gap={3}>
//                 <Row>
//                   <Col
//                     lg={12}
//                     className="aboutC"
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <h1 style={{ color: "black" }}>
//                       <span>{sectionName}</span>
//                     </h1>
//                     <div class="slide-left">
//                       <div class="inner">
//                         <img
//                           height="250px"
//                           src={profilepic}
//                           alt="Avatar placeholder"
//                         />
//                       </div>
//                     </div>
//                     <Icon
//                       icon={sqldepIcon}
//                       style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                     />
//                     <Icon
//                       icon={mongodbIcon}
//                       style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                     />
//                     <Icon
//                       icon={jqueryIcon}
//                       style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                     />
//                   </Col>
//                 </Row>
//               </Stack>
//             </Col>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default About;
