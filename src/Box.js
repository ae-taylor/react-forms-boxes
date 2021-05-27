import React from "react";

/**
 * Box Component
 * 
 * props:
 * - id
 * - height
 * - width
 * - backgroundcolor
 * - removeBox
 * 
 * BoxList -> Box
 */
function Box({id, height, width, backgroundColor, removeBox}) {

  function handleRemoveBox(evt) {
    removeBox(id);
  }

  //make a variable called style and make style=styleObject
  return ( 
    <div className="Box">
      <div className="Box-formatted"
          style={
            {height: `${height}px`, 
            width: `${width}px`, 
            backgroundColor: `${backgroundColor}` }}>
      </div>
      <br/>
      <button onClick={handleRemoveBox}>X</button>
    </div>
  )
}

export default Box;