// starting with ReactFunctionalExportComponent   [rfce]--->shortcut to create
// inside return we write html and tailwind css.
//before return ---> javascript
import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about"
import Footer from "./components/footer"

function App() {
  return(
    <>
    <Navbar />
    <Home />
    <About />
    <Footer />
    </>
  );
}

export default App;