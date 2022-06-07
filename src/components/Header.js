import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Navbar>
      <Logo>
        <img src="images/hdfc-logo.png" alt="logo" />
      </Logo>
      <Brand>
        <img src="images/hdfc-brand.png" alt="logo" />
      </Brand>

      <RightText>
        <p>
          Begins in <span>4d 18h</span>
        </p>
      </RightText>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.div`
  padding: 15px 50px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    justify-content: space-evenly;
    padding: 15px 0px;
  }
`;

const Logo = styled.div``;

const Brand = styled.div`
  img {
    width: 180px;
    margin-left: 35px;

    @media (max-width: 600px) {
      margin-top: 30px;
    }
  }
`;

const RightText = styled.div`
  p {
    color: #005e9e;
    font-family: "Soho Gothic Pro";
    font-weight: 400;

    span {
      color: #ed1c24;
    }
  }
`;
