import { useState, createRef, useEffect, useRef, RefObject } from "react";
import GridLayout from "./Grid";

const RectangleGenerator = () => {
  const [numRectangles, setNumRectangles] = useState(0);
  const [colour, setColour] = useState("#70d0d1");
  const svgRef = useRef<SVGSVGElement>(null);
  const [rectangles, setRectangles] = useState<
    { element: JSX.Element; height: number }[]
  >([]);
  const svgElRefs = useRef<Array<RefObject<SVGRectElement>>>([]);
  const [rectRefs, setRectRefs] = useState<Array<RefObject<SVGRectElement>>>(
    []
  );

  const handleClickSort = () => {
    let arr = [...rectangles];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j].height > arr[j + 1].height) {
          let temp = arr[j];
          let currentRect = svgElRefs.current[j].current;
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          let subseqRect = svgElRefs.current[j + 1].current;
          if (currentRect && subseqRect) {
            currentRect.setAttribute(
              "x",
              parseFloat(subseqRect.getAttribute("x") ?? "0").toString()
            );
            currentRect.setAttribute(
              "y",
              parseFloat(subseqRect.getAttribute("y") ?? "0").toString()
            );
            subseqRect = currentRect;
          }
        }
      }
    }
    setRectangles(arr);
    console.log(arr);
  };

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
        const rectRef = createRef<SVGRectElement>();
        const yHeight = yPos - randomHeight;
        svgElRefs.current.push(rectRef);
        // console.log(randomHeight);
        setRectRefs((prevRectRefs) => [...prevRectRefs, rectRef]);
        rectangles.push({
          element: (
            <rect
              key={i}
              ref={rectRef}
              x={i * xWidth}
              y={randomHeight}
              width={xWidth}
              height={yHeight}
              fill={colour}
              stroke={"black"}
              strokeWidth={0.2}
            />
          ),
          height: yHeight,
        });
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
      handleClickSort={handleClickSort}
      numRectangles={numRectangles}
      rectangles={rectangles.map((rect) => rect.element)}
      svgRef={svgRef}
    />
  );
};

export default RectangleGenerator;
