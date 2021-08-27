import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const Assistant = React.lazy(() => import("./Components/Assistant/Assistant"));
const Video = React.lazy(() => import("./Components/Video/Video"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));

function App() {
  return (
    <div className="main">
      <Header />
      <React.Suspense fallback={<h1>Lazy Loading...</h1>}>
        <Route exact path="/" component={Home} />
        <Route path="/assistant" component={Assistant} />
        <Route path="/video" component={Video} />
        <Route path="/contact" component={Contact} />
      </React.Suspense>
      <Footer />
    </div>
  );
}

export default App;
