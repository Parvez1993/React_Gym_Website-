import React from "react";
import Benefits from "../components/Benefits";
import Class from "../components/Classes";
import Footer from "../components/Footer";
import styled from "styled-components";

function Classes() {
  return (
    <>
      <Wrapper>
        {" "}
        <Benefits />
        <Class />
        <Footer />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin-top: 200px;
`;
export default Classes;
