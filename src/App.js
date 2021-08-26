import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Assistant from "./Components/Assistant/Assistant";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Video from "./Components/Video/Video";

function App() {
  return (
    <div className="main">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/assistant" component={Assistant} />
      <Route path="/video" component={Video} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
