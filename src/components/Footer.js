import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <Wrapper>
      <div className="grid">
        <div className="item">
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ width: "100px" }}
          ></img>
        </div>
        <div className="item">
          <p>Mysite © 2021. All rights reserved.</p>
        </div>
        <div className="item icons">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 0;
  .grid {
    display: grid;
    grid-template-rows: repeat(3, 80px);
    justify-content: center;
    align-items: center;
    .item {
      display: flex;
      justify-content: center;
    }
    .icons {
      font-size: 2rem;
    }
  }
`;
export default Footer;
