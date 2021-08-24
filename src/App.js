import React from "react";
import "./App.css";
import Scrollable from "./components/scrollable";
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  return (
    <div>
      <Scrollable title="Most Popular" />
      <Scrollable title="Action" />
    </div>
  );
}

export default App;
