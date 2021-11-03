import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
function Image({ ...props }) {
  return (
    <Wrapper>
      <div className="image__container">
        <div className="imgRound">
          <FontAwesomeIcon
            icon={props.icon}
            className="icon"
            style={{ backgroundColor: props.bg }}
          />
        </div>
        <div className="imgInfo">
          <h3>{props.heading}</h3>
          <p>{props.para}</p>
        </div>
      </div>
    </Wrapper>
  );
}

//
const Wrapper = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .imgRound {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: red;
    padding: 20px;
    color: var(--font-color);
    transition: all 0.5s linear;

    &:hover {
      color: var(--font-color2);
      background: white !important;
    }
  }

  .imgInfo {
    text-align: center;
    width: 100%;
  }
`;
export default Image;
