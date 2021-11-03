import React from "react";
import styled from "styled-components";
import imageFile from "../images/event/1.jpg";
import Button from "react-bootstrap/Button";

function Event() {
  return (
    <Wrapper>
      <div className="main">
        <div className="event-info">
          <h6>8 oct 2015, Saturday</h6>
          <h1>Upcoming Health seminar in the city</h1>
          <ul>
            <li>Bad Diet</li>
            <li>Free Execises at Home</li>
            <li>Bad Practices at Workout</li>
          </ul>
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

    .event-info {
      margin-left: 50px;
      padding: 30px 0;

      width: 100%;
      line-height: 4rem;
      h6 {
        color: var(--font-color4);
        font-size: var(--p);
      }
      h1 {
        color: var(--font-color);
      }
      ul {
        list-style: none;
        color: white;
        font-size: var(--p);
        & li:before {
          content: "✓";
          margin-right: 5%;
          color: var(--font-color4);
        }
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

export default Event;
