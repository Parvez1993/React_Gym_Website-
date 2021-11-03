import React from "react";
import { Map, Marker } from "pigeon-maps";
import styled from "styled-components";

function map() {
  return (
    <Wrapper>
      <div>
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={100} anchor={[50.879, 4.6997]} className="map" />
        </Map>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  @media only screen and (min-width: 300px) and (max-width: 776px) {
    overflow-x: hidden;
    margin-top: 500px;
  }
`;

export default map;
