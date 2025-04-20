import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accrodian2 = () => {
  const [multiple, setMultiple] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selected, setSelected] = useState(null);
  function handleSingleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    
  }
  function handleMultiSelection(getCurrentid) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentid);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentid);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  }
  // console.log(copyMultiple, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(item.id)
                    : handleSingleClick(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer} </div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accrodian2;
