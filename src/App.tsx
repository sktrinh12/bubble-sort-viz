import { useState, createRef, useEffect, useRef, RefObject } from "react";
import GridLayout from "./Grid";
import Rectangle from "./Rectangle";
import BasicModal from "./BasicModal";

const RectangleGenerator = () => {
  const [numRectangles, setNumRectangles] = useState<number>(0);
  const [colourPrimary, setColourPrimary] = useState<string>("#4e4a8e");
  const [colourSecondary, setColourSecondary] = useState<string>("#296178");
  const [displayColorPickerPrimary, setDisplayColorPickerPrimary] = useState(
    false
  );
  const [
    displayColorPickerSecondary,
    setDisplayColorPickerSecondary,
  ] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [rectangles, setRectangles] = useState<
    { element: JSX.Element; height: number }[]
  >([]);
  const [rectRefs, setRectRefs] = useState<Array<RefObject<SVGRectElement>>>(
    []
  );
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const handleClickColourPrimary = () => {
    setDisplayColorPickerPrimary(!displayColorPickerPrimary);
  };

  const handleClickColourSecondary = () => {
    setDisplayColorPickerSecondary(!displayColorPickerSecondary);
  };

  const handleCloseColourPrimary = () => {
    setDisplayColorPickerPrimary(false);
  };

  const handleCloseColourSecondary = () => {
    setDisplayColorPickerSecondary(false);
  };

  const handleChangeColourPrimary = (color: any) => {
    setColourPrimary((prevColour) => color.hex);
  };

  const handleChangeColourSecondary = (color: any) => {
    setColourSecondary((prevColour) => color.hex);
  };

  const handleClickReset = () => {
    setIsDisabled(false);
    setNumRectangles(0);
  };

  const handleChangeNumRect = (event: any) => {
    if (event.target.value > -1) {
      setNumRectangles(event.target.value);
    } else {
      setNumRectangles(0);
    }
  };

  const handleClickSort = () => {
    let delay = 0;
    let n = rectRefs.length;
    let arr = [...rectangles];
    setIsDisabled(true);
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setTimeout(() => {
          const currRect = rectRefs[j].current;
          const nextRect = rectRefs[j + 1].current;
          if (arr[j].height > arr[j + 1].height) {
            const currX = currRect.getAttribute("x");
            const nextX = nextRect.getAttribute("x");
            currRect.setAttribute("fill", `${colourSecondary}`);
            nextRect.setAttribute("fill", `${colourSecondary}`);
            currRect.setAttribute("filter", "url(#glow)");
            nextRect.setAttribute("filter", "url(#glow)");
            setTimeout(() => {
              currRect.setAttribute("fill", `${colourPrimary}`);
              nextRect.setAttribute("fill", `${colourPrimary}`);
              currRect.setAttribute("filter", "none");
              nextRect.setAttribute("filter", "none");
            }, 350);
            currRect.setAttribute("x", nextX.toString());
            nextRect.setAttribute("x", currX.toString());
            let temp = rectRefs[j];
            rectRefs[j] = rectRefs[j + 1];
            rectRefs[j + 1] = temp;
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }, delay);
        delay += 400;
      }
    }
    setTimeout(() => {
      setOpenModal(true);
    }, delay);
  };

  // useEffect(() => {}, [colourPrimary]);

  useEffect(() => {
    const genRect = () => {
      const rectangles = [];
      const newRectRefs = [];
      const boundingBox = svgRef.current!.getBoundingClientRect();
      const yPos = boundingBox.height;
      const xPos = boundingBox.width;
      const xWidth = numRectangles > 1 ? xPos / numRectangles : xPos;

      for (let i = 0; i < numRectangles; i++) {
        const randomHeight = Math.random() * yPos;
        const rectRef = createRef<SVGRectElement>();
        const yHeight = yPos - randomHeight;
        rectangles.push({
          element: (
            <Rectangle
              index={i}
              rectRef={rectRef}
              xWidth={xWidth}
              randomHeight={randomHeight}
              yHeight={yHeight}
              colour={colourPrimary}
            />
          ),
          height: yHeight,
        });
        newRectRefs.push(rectRef);
      }
      setRectangles(rectangles);
      setRectRefs(newRectRefs);
    };

    genRect();
  }, [numRectangles]);

  return (
    <>
      <GridLayout
        handleChangeNumRect={handleChangeNumRect}
        handleClickSort={handleClickSort}
        numRectangles={numRectangles}
        rectangles={rectangles.map((rect) => rect.element)}
        svgRef={svgRef}
        isDisabled={isDisabled}
        colourPrimary={colourPrimary}
        colourSecondary={colourSecondary}
        displayColorPickerSecondary={displayColorPickerSecondary}
        displayColorPickerPrimary={displayColorPickerPrimary}
        handleClickReset={handleClickReset}
        handleClickColourSecondary={handleClickColourSecondary}
        handleClickColourPrimary={handleClickColourPrimary}
        handleCloseColourSecondary={handleCloseColourSecondary}
        handleCloseColourPrimary={handleCloseColourPrimary}
        handleChangeColourPrimary={handleChangeColourPrimary}
        handleChangeColourSecondary={handleChangeColourSecondary}
      />
      <BasicModal openModal={openModal} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default RectangleGenerator;
