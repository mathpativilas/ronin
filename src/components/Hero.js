import React from "react";
import styled from "styled-components";
function Hero() {
  return (
    <Wrapper>
      <ButtonGroup>
        <Register>Register</Register>
        <Speakers>Speakers</Speakers>
        <Highlights>Highlights</Highlights>
      </ButtonGroup>
      <TextContainer>
        <h2>
          A unique
          <span>
            virtual convocation on the <br /> Metaverse{" "}
          </span>
          to celebrate the BounceBack Batch of 2022 <br /> Join the fun on
          <span>22nd May,4pm</span> onwards
        </h2>
      </TextContainer>

      <VideoContainer>
        <Img src="images/VideoPlayer.png" alt="" />

        <Play>
          <img src="images/Playbtn.png" alt="" />
        </Play>
      </VideoContainer>

      <EventText>
        <p>
          This event is honour all the students , teachers and family <br />{" "}
          members of the BounseBack Batch. Register now to take part in this
        </p>
      </EventText>

      <RegisterClick>
        <Click>CLICK TO REGISTER</Click>
      </RegisterClick>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  width: 100%;

  padding: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Register = styled.button`
  color: white;
  background-color: #ed1c24;
  border: none;
  padding: 10px 32px;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-family: "Soho Gothic Pro";
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const Speakers = styled(Register)`
  color: #58595b;
  background-color: #dedede;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #58595b;
`;

const Highlights = styled(Speakers)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: none;
`;

const TextContainer = styled.div`
  text-align: center;

  padding-top: 15px;
  width: 100%;

  h2 {
    color: #005e9e;
    font-family: "Soho Gothic Pro";
    span {
      color: #ed1c24;
    }

    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const Img = styled.img`
  height: 40%;
  width: 45%;
  object-fit: cover;
  filter: blur(2px);

  @media (max-width: 500px) {
    height: 250px;
    width: 400px;
  }
`;

const Play = styled.div`
  position: absolute;
  img {
    cursor: pointer;
    @media (max-width: 500px) {
      width: 40px;
    }
  }
`;

const EventText = styled.div`
  padding-top: 15px;
  text-align: center;

  p {
    font-family: "Source Sans Pro", sans-serif;
    color: #58595b;
  }
`;

const RegisterClick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const Click = styled(Register)`
  border-radius: 10px;
`;
