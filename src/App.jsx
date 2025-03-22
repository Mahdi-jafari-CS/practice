import { useState } from "react";

import "./App.css";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreDate from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* <StarRating noOfStars={5} /> */}

      {/* <Accrodian /> */}
      {/* <RandomColor2 /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMoreDate /> */}

      <TreeView menus={menus}/>
    </>
  );
}

export default App;
