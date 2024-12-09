import React from "react";
import Routings from "./utils/Routings"

import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/playReel";
import Images from "./Components/Images";
import Spread from "./Components/Spread";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full">
      <Navbar />
      <Routings />
      <Landing />
      <Work />
      <PlayReel/>
      <Images/>
      <Spread/>
      <Footer/>
    </div>
  );
};

export default App;
