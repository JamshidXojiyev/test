import React from "react";
import AboutUs from "./pages/AboutUs";
import { createGlobalStyle } from "styled-components";
import Featured from "./components/Featured";

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
      {/* <AboutUs /> */}
      <Featured/>
    </div>
  );
}

export default App;
