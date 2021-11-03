import React from "react";
import styled from "styled-components";
import Image from "./Image";

import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faUserClock } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <Wrapper>
      <div className="heading">
        <div className="service-heading">
          <h1>Follow Military Gym Techniques</h1>
        </div>
        <div className="service-p">
          <p>
            {" "}
            Yoga Studio includes 8 classes. Choose your level and focus to find
            the perfect class for you.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="main">
          <Image
            heading="Gym Hard"
            para="A wide variety of classes for all ages and..."
            icon={faDumbbell}
            bg="rgb(180, 25, 25) "
          ></Image>
          <Image
            heading="Military Training"
            para="State of Art Training"
            icon={faUserClock}
            bg="rgb(14, 114, 5)"
          ></Image>
          <Image
            heading="Unisex Gym"
            para="Gym is open for 18 hours per day with instructors present"
            icon={faVenusMars}
            bg="rgb(7, 40, 83);"
          ></Image>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 0;

  .heading {
    text-align: center;
    .service-p {
      color: var(--font-color3);
      text-align: center;
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    margin: 100px 0;
    @media only screen and (min-width: 576px) and (max-width: 991px) {
      display: flex;
      flex-direction: column;
    }
    @media only screen and (min-width: 300px) and (max-width: 576.99px) {
      display: block;
    }
  }
`;
export default Services;
