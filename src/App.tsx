import { useState, createRef, useEffect } from "react";
import GridLayout from "./Grid";

function RectangleGenerator() {
  const [numRectangles, setNumRectangles] = useState(0);
  const [colour, setColour] = useState("#70d0d1");
  const svgRef = createRef();
  const [rectangles, setRectangles] = useState([]);

  function bubbleSort(arr: Array<number>) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  useEffect(() => {
    const genRect = () => {
      const rectangles = [];
      const boundingBox = svgRef.current!.getBoundingClientRect();
      const yPos = boundingBox.height;
      const xPos = boundingBox.width;
      const xWidth = numRectangles > 1 ? xPos / numRectangles : xPos;
      // console.log(xWidth);

      for (let i = 0; i < numRectangles; i++) {
        const randomHeight = Math.random() * yPos;
        // console.log(randomHeight);
        rectangles.push(
          <rect
            key={i}
            x={i * xWidth}
            y={randomHeight}
            width={xWidth}
            height={yPos - randomHeight}
            fill={colour}
            stroke={"black"}
            strokeWidth={0.2}
          />
        );
      }
      setRectangles(rectangles);
    };
    genRect();
  }, [numRectangles]);

  const handleChange = (event: any) => {
    setNumRectangles(event.target.value);
  };

  return (
    <GridLayout
      handleChange={handleChange}
      numRectangles={numRectangles}
      rectangles={rectangles}
      svgRef={svgRef}
    />
  );
}

export default RectangleGenerator;
