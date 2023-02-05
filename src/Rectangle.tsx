interface Props {
  index: number;
  rectRef: React.MutableRefObject<SVGRectElement>;
  xWidth: number;
  randomHeight: number;
  yHeight: number;
  colour: string;
}

const Rectangle: React.FC<Props> = ({
  index,
  rectRef,
  xWidth,
  randomHeight,
  yHeight,
  colour,
}) => {
  return (
    <g>
      <rect
        key={`key_rect_${index}`}
        ref={rectRef}
        x={index * xWidth}
        y={randomHeight}
        width={xWidth}
        height={yHeight}
        fill={colour}
        stroke={"black"}
        strokeWidth={0.2}
      />
    </g>
  );
};

export default Rectangle;
/*
      <text
        key={`key_texty_${index}`}
        x={index * xWidth}
        y={randomHeight}
        width={xWidth}
        height={yHeight}
        fontSize={10}
        fontFamily="Verdana"
        fill={"black"}
      >
        {`y=${yHeight.toFixed(2)}`}
      </text>

      <text
        key={`key_textx_${index}`}
        x={index * xWidth}
        y={yPos}
        width={xWidth}
        height={yHeight}
        fontSize={10}
        fontFamily="Verdana"
        fill={"black"}
      >
        {`x=${(index * xWidth).toFixed(2)}`}
      </text>
 */
