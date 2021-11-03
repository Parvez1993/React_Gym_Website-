import React from "react";
import { branches } from "../data/branches";
import styled from "styled-components";
import RoundImage from "./RoundImage";

function Branches() {
  return (
    <Wrapper>
      <div className="container">
        <div className="heading">
          <h1>Our Location</h1>
          <p>In the heart of the City</p>
        </div>
        <div className="grid">
          {branches.map((item, key) => {
            return (
              <>
                <RoundImage
                  img={item.img}
                  name={item.name}
                  text={item.text}
                  square
                ></RoundImage>
              </>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 50px 0;
  .heading {
    text-align: center;
    padding: 50px 0;
    line-height: 2.5rem;
    @media only screen and (min-width: 300px) and (max-width: 600px) {
      width: 100vw;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
    justify-content: center;
    align-content: center;
    grid-gap: 20px;

    @media only screen and (min-width: 600.99px) and (max-width: 978px) {
      grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    }

    @media only screen and (min-width: 300px) and (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
      justify-content: center;
      width: 100vw;
      overflow-x: hidden;
    }
    //Put your CSS here for 200px to 767px width devices (cover all width between 200px to 767px //
  }
`;

export default Branches;
