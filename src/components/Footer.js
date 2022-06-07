import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <HeadContainer>
        <h3> Terms and Conditions - Privacy Policy</h3>
      </HeadContainer>

      <DeatilContainer>
        <List>
          <li>
            {" "}
            HDFC Life Insurance Company Limited ("HDFC Life"). CIN:
            L65110MH2000PLC128245, IRDAI Registration No. 101.
          </li>
          <li>
            {" "}
            Registered Office: 13th Floor, Lodha Excelus, Apollo Mills Compound,
            N.M. Joshi Marg, Mahalaxmi, Mumbai - 400 011
          </li>

          <li>
            Email: service@hdfclife.com,Tel No: 1860-267-9999. Available
            (Mon-Sat 10 am to 7 pm) Local charges apply. DO NOT prefix any
            country code e.g. +91 or 00, Website: www.hdfclife.com
          </li>

          <li>
            The name/letters "HDFC" in the name/logo of the company belongs to
            Housing Development Finance Corporation Limited ("HDFC Limited") and
            is used by HDFC Life under an agreement entered into with HDFC
            Limited.
          </li>

          <li>
            Any unauthorized dissemination, distribution, reproduction, display,
            alteration or copying in any form or by any means of any contents of
            this communication is prohibited. ARN: INT/MC/05/22/28801
          </li>
        </List>
      </DeatilContainer>

      <Scroll>
        <img src="images/scroll.png" alt="" />
      </Scroll>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  width: 100%;
  background-color: #231f20;
  color: #d1d3d4;
  position: relative;
`;

const HeadContainer = styled.div`
  text-align: center;
  padding-top: 20px;
  font-family: "Source Sans Pro", sans-serif;
`;

const DeatilContainer = styled.div`
  padding-top: 25px;
  padding-left: 20px;
`;

const List = styled.ul`
  list-style: none;
  font-family: "Times New Roman", Times, serif;
  line-height: 25px;
  padding: 10px;
`;

const Scroll = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;

  @media (max-width: 500px) {
    top: 40px;
  }
`;
