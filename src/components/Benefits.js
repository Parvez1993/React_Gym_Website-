import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../images/benefit/1.jpg";

function Benefits() {
  return (
    <Wrapper>
      <div className="benefit">
        <div className="container">
          <div className="heading">
            <h1>The Main Reasons to Gym:</h1>
          </div>
          <div className="main">
            <div className="col">
              <div className="benefit__col">
                <div className="benefit__col__info">
                  <h3>Good for health</h3>
                  <p>Gym is where you can find balance, harmony and energy.</p>
                </div>
                <div className="benefit__col__img">
                  <FontAwesomeIcon icon={faHeart} className="icon" />
                </div>
              </div>
              <div className="benefit__col">
                <div className="benefit__col__info">
                  <h3>Free Spa</h3>
                  <p>Get free spa weekly to relieve out the pain</p>
                </div>
                <div className="benefit__col__img">
                  <FontAwesomeIcon icon={faSpa} className="icon" />
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="benefit__col">
                <img src={img} alt="benfit" className="benefitImg"></img>
              </div>
            </div>
            <div className="col">
              <div className="benefit__col">
                <div className="benefit__col__info">
                  <h3>Award Winning Instructor</h3>
                  <p>Follow updated techniques which are proven best</p>
                </div>
                <div className="benefit__col__img">
                  <FontAwesomeIcon icon={faAward} className="icon" />
                </div>
              </div>
              <div className="benefit__col">
                <div className="benefit__col__info">
                  <h3>Hygenic Shower</h3>
                  <p>Seperate shower faciilies for male and female.</p>
                </div>
                <div className="benefit__col__img">
                  <FontAwesomeIcon icon={faShower} className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .heading {
    text-align: center;
    margin: 40px 0;
  }
  .main {
    justify-content: space-between;
    @media only screen and (min-width: 300px) and (max-width: 991.9px) {
      flex-direction: column;
    }

    .col {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      @media only screen and (min-width: 577px) and (max-width: 768.9px) {
        display: block;
      }
      @media only screen and (min-width: 300px) and (max-width: 577.9px) {
        width: 80vw;
      }
      .benefit__col {
        display: flex;
        align-content: space-around;
        justify-content: space-around;
        margin: 20px 0;
        @media only screen and (min-width: 576px) and (max-width: 991.9px) {
          width: 80vw;
        }
      }

      .icon {
        background: red;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        padding: 20px;
        color: white !important;
      }

      .benefit__col__info {
        width: 80%;
        @media only screen and (min-width: 768px) and (max-width: 991.9px) {
          justify-content: center;
        }
      }
    }
    .col2 {
      width: 50% !important;
      img {
        object-fit: contain;
        width: 80% !important;
        height: 80% !important;
        @media only screen and (min-width: 200px) and (max-width: 991.9px) {
          display: none;
        }
      }
    }
  }
`;
export default Benefits;
