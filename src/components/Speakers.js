import React from "react";
import styled from "styled-components";
import Speaker from "./speaker/Speaker";

function Speakers() {
  return (
    <Wrapper>
      <Speaker />
    </Wrapper>
  );
}

export default Speakers;

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  background-color: #e2e6ec;
  display: flex;
  justify-content: center;
  align-items: center;
`;
