import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Speakers from "./components/Speakers";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Speakers />
      <Slider />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
