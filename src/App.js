import React from "react";
import AboutUs from "./pages/AboutUs";
import { createGlobalStyle } from "styled-components";
import Intro from "./pages/Intro";
import Ads from "./pages/Ads";

const GlobalStyle = createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box
   }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Intro />
      <AboutUs />
      <Ads />
    </div>
  );
}

export default App;
