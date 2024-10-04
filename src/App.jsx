// starting with ReactFunctionalExportComponent   [rfce]--->shortcut to create
// inside return we write html and tailwind css.
//before return ---> javascript
import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about"
import Footer from "./components/footer"
import Portfolio from './components/Portfolio';
import Contact from './components/contact'
import { Toaster } from 'react-hot-toast';

function App() {
  return(
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
    <Toaster/>
    </>
  );
}

export default App;