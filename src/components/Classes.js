import React from "react";
import ClassesCard from "./ClassesCard";
import img1 from "../images/calender/1.jpg";
import img2 from "../images/calender/2.jpg";
import img3 from "../images/calender/3.jpg";
import img4 from "../images/calender/4.jpg";
import img5 from "../images/calender/5.jpg";
import img6 from "../images/calender/6.jpg";
import styled from "styled-components";
function Class() {
  return (
    <>
      <Wrapper>
        <div className="text-container">
          <div>
            <h1>Our Schedule</h1>
          </div>
          <div>
            <p>Choose Your Level and Focus</p>
          </div>
        </div>
        <div className="main">
          <div className="mainItem">
            <ClassesCard
              heading="Private & Group Lessons"
              days="Friday,Saturday"
              time="06:30pm-07:45pm"
              img={img1}
              bg="rgb(180, 25, 25)"
            ></ClassesCard>
          </div>
          <div className="mainItem">
            <ClassesCard
              heading="Private & Group Lessons"
              days="Friday,Saturday"
              time="06:30pm-07:45pm"
              img={img2}
              bg="rgb(180, 25, 25)"
            ></ClassesCard>
          </div>
          <div className="mainItem">
            <ClassesCard
              heading="Private & Group Lessons"
              days="Friday,Saturday"
              time="06:30pm-07:45pm"
              img={img3}
              bg="rgb(180, 25, 25)"
            ></ClassesCard>
          </div>
          <div className="mainItem">
            <ClassesCard
              heading="Private & Group Lessons"
              days="Friday,Saturday"
              time="06:30pm-07:45pm"
              img={img4}
              bg="rgb(180, 25, 25)"
            ></ClassesCard>
          </div>
          <div className="mainItem">
            <ClassesCard
              heading="Private & Group Lessons"
              days="Friday,Saturday"
              time="06:30pm-07:45pm"
              img={img5}
              bg="rgb(180, 25, 25)"
            ></ClassesCard>
          </div>
          <div className="mainItem">
            <ClassesCard
              heading="Private & Group Lessons"
              days="Friday,Saturday"
              time="06:30pm-07:45pm"
              img={img6}
              bg="rgb(180, 25, 25)"
            ></ClassesCard>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  padding: 100px 0;
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 100px;
    line-height: 3rem;
    width: 100vw;
    p {
      font-size: var(--p);
    }
  }
  .main {
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 50px;
    width: 1320px;
    margin: 0 auto;
    @media only screen and (min-width: 971px) and (max-width: 1300px) {
      width: 900px;
      margin: 0 auto;
    }
    @media only screen and (min-width: 576px) and (max-width: 970px) {
      width: 200px;
      margin: 0 auto;
    }
    @media only screen and (min-width: 300px) and (max-width: 576.9px) {
      flex-direction: column;
      width: 100vw;
    }
  }
  .mainItem {
    flex-basis: 33%;
    margin: 0 auto !important;
    @media only screen and (min-width: 971px) and (max-width: 1300px) {
      flex-basis: 50%;
    }
    @media only screen and (min-width: 300px) and (max-width: 970px) {
      flex-basis: 100%;
    }
  }
`;
export default Class;

// <div>
// <Wrapper>
//   <div className="main">
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Text>
//           <div className="main">
//             <div>
//               <h3>Private</h3>
//             </div>
//             <div>
//               <div class="vertical"></div>
//             </div>
//             <div>
//               <div>
//                 <div className="main">
//                   <FontAwesomeIcon icon={faCalendar} className="icon" />
//                   <p>Friday,Saturday</p>
//                 </div>
//                 <p>06:30pm - 07:45pm</p>
//               </div>
//             </div>
//           </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Text>
//           <div className="main">
//             <div>
//               <h3>Private</h3>
//             </div>
//             <div>
//               <div class="vertical"></div>
//             </div>
//             <div>
//               <div>
//                 <div className="main">
//                   <FontAwesomeIcon icon={faCalendar} className="icon" />
//                   <p>Friday,Saturday</p>
//                 </div>
//                 <p>06:30pm - 07:45pm</p>
//               </div>
//             </div>
//           </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Text>
//           <div className="main">
//             <div>
//               <h3>Private</h3>
//             </div>
//             <div>
//               <div class="vertical"></div>
//             </div>
//             <div>
//               <div>
//                 <div className="main">
//                   <FontAwesomeIcon icon={faCalendar} className="icon" />
//                   <p>Friday,Saturday</p>
//                 </div>
//                 <p>06:30pm - 07:45pm</p>
//               </div>
//             </div>
//           </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </div>

// </Wrapper>
// </div>
