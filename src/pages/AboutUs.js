import React from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import CategorySection from "../components/CategorySection";
import Nav from "../components/Nav";
import back from "../assets/background.jpg";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Wrapper>
      <Nav />
      <AboutSection />
      <CategorySection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 585px;
  background: url(${back}) no-repeat center center/cover;
`;

export default AboutUs;
