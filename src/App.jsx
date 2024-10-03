// starting with ReactFunctionalExportComponent   [rfce]--->shortcut to create
// inside return we write html and tailwind css.
//before return ---> javascript
import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return(
    <>
    <Navbar />
    <Home />
    </>
  );
}

export default App;