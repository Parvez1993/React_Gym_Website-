import React from "react";
import { testimonial } from "../data/testimonial";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function Testimonial() {
  const [curr, setCurr] = React.useState(0);

  function next() {
    setCurr((curr) => curr + 1);

    if (curr >= testimonial.length - 1) {
      setCurr(testimonial.length - 1);
    }
  }

  function before() {
    if (curr <= 0) {
      setCurr(0);
    } else {
      setCurr((curr) => curr - 1);
    }
  }

  React.useEffect(() => {
    setCurr(0);
    const interval = setInterval(changeSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeSlide = () => {
    const lastIndex = testimonial.length - 1;
    setCurr((currentPosition) => {
      return currentPosition === lastIndex ? 0 : currentPosition + 1;
    });
  };

  console.log(testimonial.length);

  return (
    <>
      <Wrapper>
        <div className="testimonial">
          <div className="text">
            <h3>{testimonial[curr].text}</h3>
          </div>
          <div className="main">
            <div className="img">
              <img src={testimonial[curr].img} alt="user" />
            </div>
            <div>
              <p>{testimonial[curr].name}</p>
            </div>
          </div>

          <button
            className="before"
            style={{ padding: "10px" }}
            onClick={() => {
              before();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="next"
            style={{ padding: "10px" }}
            onClick={() => {
              next();
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <div className="circleButton">
            {testimonial.map((item, key) => {
              return (
                <button
                  className="circle"
                  onClick={() => {
                    setCurr(key);
                  }}
                ></button>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../images/test.jpg") !important;
  background-size: cover;
  background-position: center;
  background-color: #fff;
  height: 50vh;
  z-index: -1;
  .testimonial {
    height: 300px;
    position: relative;
    top: 0%;
    transform: translate(0%, 40%);
    color: var(--font-color);
    .text {
      text-align: center;
    }
    .main {
      justify-content: center;
      align-items: center;
      column-gap: 20px;
      padding: 20px 0;
      img {
        border-radius: 50%;
      }
    }
    .before {
      position: absolute;
      top: 10%;
      left: 10%;
      border: none;
      background: none;
      font-size: 2rem;
      color: white;
    }
    .next {
      position: absolute;
      top: 10%;
      right: 10%;
      border: none;
      background: none;
      font-size: 2rem;
      color: white;
    }
    .circleButton {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, 50%);
      .circle {
        margin: 15px 10px;
        border-radius: 50%;
        background: var(--bg);
        height: 20px;
        width: 20px;
      }
    }
  }
`;

export default Testimonial;
