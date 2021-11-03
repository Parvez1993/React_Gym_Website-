import React from "react";
import styled from "styled-components";
export default function RoundImage(props) {
  console.log("is props is", props.square);
  return (
    <Wrapper>
      {" "}
      <div className="round">
        <div className={`${props.square ? "square__img" : "round__img"}`}>
          <img src={props.img} alt="img" style={{ width: "100%" }} />
        </div>
        <div className="info">
          <h4 class="name">{props.name}</h4>
          <p className="text">{props.text}</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .round {
    display: flex;
    flex-direction: column;
    align-items: center;
    .square__img {
      overflow: hidden;

      img {
        width: 200px !important;
        height: 200px !important;
      }
    }
    .round__img {
      overflow: hidden;
      border-radius: 50%;
      img {
        justify-self: center;
        height: 150px;
        width: 150px;
        -webkit-transition: all 1s ease; /* Safari and Chrome */
        -moz-transition: all 1s ease; /* Firefox */
        -ms-transition: all 1s ease; /* IE 9 */
        -o-transition: all 1s ease; /* Opera */
        transition: all 1s ease;

        &:hover {
          -webkit-transform: scale(1.2); /* Safari and Chrome */
          -moz-transform: scale(1.25); /* Firefox */
          -ms-transform: scale(1.25); /* IE 9 */
          -o-transform: scale(1.25); /* Opera */
          transform: scale(1.25);
        }
      }
    }
    .info {
      text-align: center;
      padding: 10px 0;
      .name {
        color: var(--font-color4);
      }
      p {
        color: var(--font-color3);
      }
    }
  }
`;
