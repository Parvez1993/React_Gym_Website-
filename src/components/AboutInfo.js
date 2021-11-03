import React from "react";
import styled from "styled-components";
import imageFile from "../images/benefit/1.jpg";
import Button from "react-bootstrap/Button";

function AboutInfo() {
  return (
    <Wrapper>
      <div className="main">
        <div className="about-info">
          <h1>Upcoming Health seminar in the city</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            totam, accusamus commodi eligendi repellendus veniam culpa fuga
            repudiandae iusto qui.
          </p>
          <Button size="lg" active>
            Primary button
          </Button>
        </div>
        <div className="event-img">
          <img src={imageFile} alt="abc" />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 100px;
  overflow-x: hidden;
  .main {
    justify-content: space-between;
    align-items: center;
    background: var(--bg);

    .about-info {
      margin-left: 50px;
      padding: 30px 0;

      width: 100%;

      h1 {
        color: var(--font-color);
      }
      p {
        color: white;
        font-size: var(--p);
        margin: 50px 0;
      }
      Button {
        background: var(--bg1);
        border-color: var(--bg1);
      }
    }

    .event-img {
      width: 50vw;
      background: pink;
      img {
        object-fit: cover;
        width: 90vw;
        height: 70vh;
      }
      @media only screen and (min-width: 300px) and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export default AboutInfo;
