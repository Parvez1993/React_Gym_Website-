import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

export default function BenefitCard(props) {
  return (
    <Wrapper>
      {console.log(props.bg)}
      <Card style={{ width: "25rem", background: props.bg }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Text>
            <div className="cardMain">
              <div>
                <h4>{props.heading}</h4>
              </div>
              <div>
                <div class="vertical"></div>
              </div>
              <div>
                <div>
                  <div className="mainText">
                    <FontAwesomeIcon icon={faCalendar} className="icon" />
                    <p>{props.days}</p>
                  </div>
                  <p>{props.time}</p>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .cardMain {
    display: flex;
    justify-content: space-around;
    column-gap: 10px;
    align-items: center;
  }
  h4 {
    width: 150px;
    color: var(--font-color) !important;
  }
  p {
    color: var(--font-color) !important;
  }

  .vertical {
    width: 5px;
    height: 100px;
    background: var(--font-color);
  }
  .mainText {
    display: flex;
    column-gap: 10px;
    color: var(--font-color);
  }
`;
