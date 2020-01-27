import React from "react";
// import global styling
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./elements/Header";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
