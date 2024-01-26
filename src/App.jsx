import React from "react";
import BackgroundVideoSection from "./components/BackgroundVideoSection";
import "./App.css";
import KnowSomething from "./components/KnowSomething";
import WeDo from "./components/WeDo";
import "./animate.css";
import Stats from "./components/Stats";
import "./App.css";
import Featured from "./components/Featured";
function App() {
  return (
    <>
      <div>
        <BackgroundVideoSection />
        <KnowSomething />
        <WeDo />
        <Stats />
      </div>
    </>
  );
}

export default App;
