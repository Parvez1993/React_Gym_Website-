import React from "react";
import RoundImage from "./RoundImage";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid">
          <div className="item">
            <RoundImage
              img="../images/building.png"
              name="Address:"
              text="85 Fentiman Ave Ottawa, ONK1S0T7"
            ></RoundImage>
          </div>
          <div className="item">
            <RoundImage
              img="../images/telephone.png"
              name="Telephone:"
              text="017333222"
            ></RoundImage>
          </div>
          <div className="item">
            <RoundImage
              img="../images/email.png"
              name="Email:"
              text="gymnow@gmail.com"
            ></RoundImage>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  margin: 50px 0;
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    align-content: center;
    justify-content: space-space-between;
    grid-gap: 30px;
    height: 40vh;

    @media only screen and (min-width: 576px) and (max-width: 767.98px) {
      display: block;
      margin: 50px 0;
    }
    @media only screen and (min-width: 300px) and (max-width: 576.99px) {
      display: block;
      margin: 50px 0;
      width: 100vw;
    }
  }
`;

export default Contact;
