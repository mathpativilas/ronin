import React from "react";
import styled from "styled-components";
function Speaker() {
  return (
    <Wrapper>
      <SpeakerText>
        <h1>Speakers</h1>
      </SpeakerText>
      <Container>
        <ProfileImg>
          <img src="images/Profpic1.png" alt="" />
        </ProfileImg>

        <AboutContainer>
          <h3>Vibha Padalkar</h3>
          <p>
            CEO and Md of HDFC Life , Vibha Padalkar is an inspirational leader{" "}
            <br />
            and recipent of thr "Most Powerful Women In Business" award by{" "}
          </p>
        </AboutContainer>
      </Container>

      <Container2>
        <AboutContainer2>
          <h3>Sunil Chhetri</h3>
          <p>
            Captain of the Indian National Football team, Sunil Chhetri is a
            proud <br /> recipient of the Arjuna Award, the Padma Shri
          </p>
        </AboutContainer2>

        <ProfileImg>
          <img src="images/Profpic2.png" alt="" />
        </ProfileImg>
      </Container2>

      <Container>
        <ProfileImg>
          <img src="images/Profpic3.png" alt="" />
        </ProfileImg>

        <AboutContainer>
          <h3>Swati Bhargava</h3>
          <p>
            Co-Founder of CashKaro.com and EarnKaro.com, Swati Bhargava is{" "}
            <br /> one of Indias leading women entrepreneurs and was featured in
          </p>
        </AboutContainer>
      </Container>

      <Container2>
        <AboutContainer2>
          <h3>Karunesh Talwar</h3>
          <p>
            With over 700K subscribers on YouTube and over 170K followers on{" "}
            <br /> Instagram, Karunesh Talwar is one of India's most
          </p>
        </AboutContainer2>

        <ProfileImg>
          <img src="images/Profpic4.png" alt="" />
        </ProfileImg>
      </Container2>
    </Wrapper>
  );
}

export default Speaker;

const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Container = styled.div`
  max-width: 1100px;
  padding: 15px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px;

  box-shadow: 3px 3px 10px #58595b;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:after {
    content: "";
    height: 130px;
    width: 4px;
    background-color: red;
    position: absolute;

    top: 0;
    left: 0;
  }
`;

const ProfileImg = styled.div``;

const AboutContainer = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    text-align: left;
    color: #005e9e;
    font-family: "Soho Gothic Pro";
  }
  p {
    text-align: center;
    font-family: "Source Sans Pro", sans-serif;
    color: #58595b;
  }
`;

const Container2 = styled.div`
  max-width: 1100px;
  padding: 15px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px;
  box-shadow: 3px 3px 10px #58595b;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  &:after {
    content: "";
    height: 130px;
    width: 4px;
    background-color: red;
    position: absolute;

    top: 0;
    right: 0;
  }
`;

const AboutContainer2 = styled(AboutContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  @media (max-width: 500px) {
    align-items: center;
  }
`;
const SpeakerText = styled.div`
  h1 {
    color: #005e9e;
    font-family: "Soho Gothic Pro";
  }
`;
