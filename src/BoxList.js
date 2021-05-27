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
  function removeBox(id) {
    setBoxes(boxes => [...boxes].filter(box => box.id !== id));
  }

  function renderBoxes() {
    return boxes.map(box => (
                <Box key={box.id}
                id={box.id}
                height={box.height}
                width={box.width}
                backgroundColor={box.backgroundColor} 
                removeBox={removeBox}/>
          )
    );
  }

   /** Add new box object to list. */
   //TODO destructure properties from box to make a box out of only the properties that we will use, validate!
   function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
      <div>{renderBoxes()}</div>
    </div>
  )

}

export default BoxList;