//  working on it
// import React from "react";
// import { Container, Col, Row } from "react-bootstrap";
// import styled from "styled-components";
// import {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// } from "../data/timetable";

// function Timetable() {
//   return (
//     <Wrapper>
//       <Container class="container">
//         <Row lg={12}>
//           {Monday.map((item) => {
//             return (
//               <>
//                 <Col
//                   className={item.nothing ? "hide" : "col"}
//                   style={{ backgroundColor: `${item.bg}` }}
//                 >
//                   <div className="text">
//                     <div className="itemtext">{item.text}</div>
//                   </div>
//                   <div className="info">
//                     <div className="itemtext">{item.info}</div>
//                   </div>
//                   <div className="time">
//                     <div className="itemtext">{item.time}</div>
//                   </div>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//         <Row lg={12}>
//           {Tuesday.map((item) => {
//             return (
//               <>
//                 <Col
//                   className={item.nothing ? "hide" : "col"}
//                   style={{ backgroundColor: `${item.bg}` }}
//                 >
//                   <div className="text">
//                     <div className="itemtext">{item.text}</div>
//                   </div>
//                   <div className="info">
//                     <div className="itemtext">{item.info}</div>
//                   </div>
//                   <div className="time">
//                     <div className="itemtext">{item.time}</div>
//                   </div>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//         <Row lg={12}>
//           {Wednesday.map((item) => {
//             return (
//               <>
//                 <Col
//                   className={item.nothing ? "hide" : "col"}
//                   style={{ backgroundColor: `${item.bg}` }}
//                 >
//                   <div className="text">
//                     <div className="itemtext">{item.text}</div>
//                   </div>
//                   <div className="info">
//                     <div className="itemtext">{item.info}</div>
//                   </div>
//                   <div className="time">
//                     <div className="itemtext">{item.time}</div>
//                   </div>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//         <Row lg={12}>
//           {Thursday.map((item) => {
//             return (
//               <>
//                 <Col
//                   className={item.nothing ? "hide" : "col"}
//                   style={{ backgroundColor: `${item.bg}` }}
//                 >
//                   <div className="text">
//                     <div className="itemtext">{item.text}</div>
//                   </div>
//                   <div className="info">
//                     <div className="itemtext">{item.info}</div>
//                   </div>
//                   <div className="time">
//                     <div className="itemtext">{item.time}</div>
//                   </div>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//         <Row lg={12}>
//           {Friday.map((item) => {
//             return (
//               <>
//                 <Col
//                   className={item.nothing ? "hide" : "col"}
//                   style={{ backgroundColor: `${item.bg}` }}
//                 >
//                   <div className="text">
//                     <div className="itemtext">{item.text}</div>
//                   </div>
//                   <div className="info">
//                     <div className="itemtext">{item.info}</div>
//                   </div>
//                   <div className="time">
//                     <div className="itemtext">{item.time}</div>
//                   </div>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//         <Row lg={12}>
//           {Saturday.map((item) => {
//             return (
//               <>
//                 <Col
//                   className={item.nothing ? "hide" : "col"}
//                   style={{ backgroundColor: `${item.bg}` }}
//                 >
//                   <div className="text">
//                     <div className="itemtext">{item.text}</div>
//                   </div>
//                   <div className="info">
//                     <div className="itemtext">{item.info}</div>
//                   </div>
//                   <div className="time">
//                     <div className="itemtext">{item.time}</div>
//                   </div>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//         <Row lg={12}>
//           {Sunday.map((item) => {
//             return (
//               <>
//                 <Col
//                   className={item.nothing ? "hide" : "col"}
//                   style={{ backgroundColor: `${item.bg}` }}
//                 >
//                   <div className="text">
//                     <div className="itemtext">{item.text}</div>
//                   </div>
//                   <div className="info">
//                     <div className="itemtext">{item.info}</div>
//                   </div>
//                   <div className="time">
//                     <div className="itemtext">{item.time}</div>
//                   </div>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//       </Container>
//     </Wrapper>
//   );
// }
// const Wrapper = styled.div`
//   margin-top: 100px;
//   .row {
//     display: flex;
//   }
//   .col {
//     border: 1px solid black;
//     color: white;
//   }
//   .col.hide {
//     visibility: hidden;
//   }
// `;

// export default Timetable;
