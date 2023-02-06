import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { FC, RefObject } from "react";

const RootStyles = styled(Paper)(({ theme }) => ({
  minHeight: "50vh",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  svg: { width: "100%", height: "50vh" },
}));

interface SVGProps {
  svgRef: RefObject<SVGSVGElement>;
  rectangles: SVGRectElement[];
}

const SVG: FC<SVGProps> = ({ svgRef, rectangles }) => {
  return (
    <RootStyles>
      <svg ref={svgRef}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {rectangles}
      </svg>
    </RootStyles>
  );
};

export default SVG;
