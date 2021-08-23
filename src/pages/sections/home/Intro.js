import React from "react";
// Page Components
import AboutSection from "../../../components/AboutSection";
import Nav from "../../../components/Nav";
import back from "../../../assets/background.jpg";
import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper>
      <Nav />
      <AboutSection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 585px;
  background: url(${back}) no-repeat center center/cover;
  padding-top: 200px;
`;

export default Intro;
