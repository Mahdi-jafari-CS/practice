import { useState } from "react";

import "./App.css";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreDate from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-component/modal-test";
import Accrodian from "./components/accordian";
import GithubProfileFinder from "./components/github-profile-finder";

function App() {
  return (
    <>
      {/* <StarRating noOfStars={5} /> */}

      {/* <Accrodian /> */}
      {/* <RandomColor2 /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMoreDate /> */}

      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=30"} /> */}
      {/* <TabTest /> */}


      {/* <ModalTest /> */}
      <GithubProfileFinder />
    </>
  );
}

export default App;
