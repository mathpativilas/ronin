import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

import "./Slider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Slider() {
  return (
    <MainWrapper>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "20px",
          color: "#005e9e",
          fontFamily: "Soho Gothic Pro",
        }}
      >
        Highlights
      </h1>
      <Wrapper>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src="images/slide1.png" alt="" />
            <p>A wide range of avatars to choose from.</p>
          </Item>
          <Item>
            {" "}
            <img src="images/slide2.jpg" alt="" />
            <p>A beautiful environment to explore.</p>
          </Item>

          <Item>
            {" "}
            <img src="images/slide3.jpg" alt="" />
            <p>Entertaining and inspirational talks from special guests.</p>
          </Item>
          <Item>
            {" "}
            <img src="images/slide4.png" alt="" />
            <p>An a-maze-ing experience to explore</p>
          </Item>
          <Item>
            {" "}
            <img src="images/slide5.png" alt="" />
            <p>An a-maze-ing experience to explore</p>
          </Item>
        </Carousel>
      </Wrapper>
    </MainWrapper>
  );
}
export default Slider;

const Item = styled.div`
  width: 100%;
  text-align: center;
  color: black;
  margin: 0 10px;
  p {
    font-family: "Source Sans Pro", sans-serif;
    color: #58595b;
  }
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
