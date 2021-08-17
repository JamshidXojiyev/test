import React from "react";
import AboutUs from "./pages/AboutUs";
import { createGlobalStyle } from "styled-components";
import Intro from "./pages/Intro";
import Adsjr from "./components/common/Adsjr";
import Ads from "./pages/Ads";
import Statistics from "./pages/Statistics";

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
      <Statistics />
    </div>
  );
}

export default App;
