import React from "react";
//@ts-ignore
import img3_desktop from "../images/desktop_backgrounds/3.svg";
//@ts-ignore
import img3_mobile from "../images/mobile_backgrounds/3_fix.png";
//@ts-ignore
import map_24 from "../images/map/map-24_new.svg";
//@ts-ignore
import legend_24 from "../images/map/legend-24_new.svg";
//@ts-ignore
import styled from "styled-components";

function importAll(r: any) {
  return r.keys().map(r);
}

const mapImages = importAll(
  require.context("../images/map", false, /\.(png|jpe?g|svg)$/)
);

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  top: 1.75rem;
`;

const MapImg = styled.img`
  position: absolute;
  left: 7%;
  height: 86%;
  width: 86%;
  z-index: 2;
  @media (max-width: 769px) {
    height: 40%;
    width: 85%;
    top: 20%;
  }
`;

const List = styled.img`
  position: absolute;
  top: 74%;
  width: 18%;
  z-index: 2;
  @media (max-width: 769px) {
    top: 40%;
    width: 25%;
  }
`;

const List1 = styled(List)`
  left: 8%;
  top: 70%;
  height: 15%;
  width: 22%;
  z-index: 2;
  background-color: #e8d9cb;
  padding-inline: 1.5em;
  padding-block: 1.5em;
  border: 0.25rem solid;
  border-radius: 2rem;
  @media (max-width: 769px) {
    top: 60%;
    height: 12%;
    width: 33%;
    left: 7%;
    padding-inline: 1em;
    padding-block: 1em;
    border: 0.1rem solid;
    border-radius: 2rem;
  }
`;

const List2 = styled(List)`
  left: 30.4%;
  top: 74%;
  width: 18%;
  z-index: 2;
  @media (max-width: 769px) {
    left: 25%;
    top: 48%;
    width: 25%;
  }
`;

const List3 = styled(List2)`
  left: 50%;
  top: 72.25%;
  width: 19%;
  z-index: 2;
  @media (max-width: 769px) {
    left: 70%;
    width: 28%;
    top: 47%;
  }
`;

const List4 = styled(List1)`
  left: 72.5%;
  z-index: 2;
  @media (max-width: 769px) {
    left: 48%;
  }
`;

const Map: React.FC = () => {
  return (
    <>
      <Container id="map">
        <picture>
          <source srcSet={img3_desktop} media="(min-width: 769px)" />
          <source srcSet={img3_mobile} media="(max-width: 768px)" />
          <Img src={img3_desktop} alt="last page" />
        </picture>
        <MapImg src={map_24} alt="map" />
        <List1 src={legend_24} alt="list1" />
        {/* <List2 src={mapImages[2].default} alt="list2" />
        <List3 src={mapImages[4].default} alt="list3" />
        <List4 src={mapImages[3].default} alt="list4" /> */}
      </Container>
    </>
  );
};

export default Map;
