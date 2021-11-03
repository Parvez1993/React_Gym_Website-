import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

function Hero({ infos }) {
  console.log(`"${infos ? "info" : "infos2"}"`);
  return (
    <Wrapper>
      <div className="hero">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero/1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className={infos ? "info" : "info2"}>
              <h5>Work Hard</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero/2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className={infos ? "info" : "info2"}>
              <h5>Don't Overtime</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero/3.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className={infos ? "info" : "info2"}>
              <h5>Take Lessons From the Pros</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  img {
    background-size: cover;
    background-position: 50% 50%;
    height: 800px;
  }
  h5 {
    color: var(--font-color);
    font-size: var(--hero-heading);
    &::first-letter {
      color: red;
      font-size: 120%;
    }
  }
  p {
    color: var(--font-color);
    font-size: var(--hero-p);
    &::first-letter {
      color: red;
      font-size: 120%;
    }
  }
  .info {
    position: absolute;
    top: 0%;
    left: 0;
    animation: mymove 2s linear;
    transform: translate(10%, 50%);

    &::after {
      @keyframes mymove {
        from {
          transform: translate(-100%, 50%);
        }
        to {
          transform: translate(10%, 50%);
        }
      }
    }
  }
  .carousel-dark .carousel-indicators [data-bs-target] {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .info2 {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(20%, 30%);
    width: 600px;
    color: #fff;
  }
`;
export default Hero;
