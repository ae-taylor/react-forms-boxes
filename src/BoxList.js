import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"
import { v4 as uuid } from 'uuid';


/** Box List: manages boxes in the list
 *
 * State:
 * - boxes: array like [ { id, height, width, backgroundColor }, ... ]
 *
 * App -> BoxList -> Boxes & NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** remove box from list. */
  function removeBox(removeId) {
    setBoxes(boxes => [...boxes].filter(box => box.id !== removeId));
  }

  function renderBoxes() {
    return (
          <div>
           { boxes.map(box => (
                <Box key={box.id}
                id={box.id}
                height={box.height}
                width={box.width}
                backgroundColor={box.backgroundColor} 
                removeBox={removeBox}/>
          )) }
          </div>
    );
  }

   /** Add new box object to list. */
   function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  )

}

export default BoxList;