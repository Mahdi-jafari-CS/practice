import { useState } from "react";

import "./App.css";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreDate from "./components/load-more-data";

function App() {
  return (
    <>
      {/* <StarRating noOfStars={5} /> */}

      {/* <Accrodian /> */}
      {/* <RandomColor2 /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      <LoadMoreDate />
    </>
  );
}

export default App;
