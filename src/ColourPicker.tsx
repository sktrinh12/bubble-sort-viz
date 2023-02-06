import React from "react";
import { TwitterPicker } from "react-color";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const colourPalettePrimary = [
  "#009688",
  "#673AB7",
  "#4CAF50",
  "#3F51B5",
  "#FFC107",
  "#E91E63",
  "#03A9F4",
];

const colourPaletteSecondary = [
  "#00BCD4",
  "#BA68C8",
  "#8BC34A",
  "#9C27B0",
  "#FF9800",
  "#F44336",
  "#00BCD4",
];

interface SwatchProps {
  colour: string;
  handleClickColour: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Swatch: React.FC<SwatchProps> = ({ colour, handleClickColour }) => {
  return (
    <button
      onClick={handleClickColour}
      style={{
        width: 42,
        height: 42,
        backgroundColor: colour,
        border: `2px solid ${colour}`,
        borderRadius: "6px",
        boxSizing: "border-box",
        padding: "4px",
        cursor: "pointer",
        marginRight: 4,
      }}
    ></button>
  );
};

interface ColorPickerProps {
  colourSecondary: string;
  colourPrimary: string;
  displayColorPickerPrimary: boolean;
  displayColorPickerSecondary: boolean;
  handleClickColourPrimary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleChangeColourPrimary: (event: React.MouseEvent) => void;
  handleCloseColourPrimary: (event: React.MouseEvent) => void;
  handleClickColourSecondary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleChangeColourSecondary: (event: React.MouseEvent) => void;
  handleCloseColourSecondary: (event: React.MouseEvent) => void;
}

const ColourPicker: React.FC<ColorPickerProps> = ({
  colourPrimary,
  colourSecondary,
  displayColorPickerPrimary,
  handleClickColourPrimary,
  handleChangeColourPrimary,
  handleCloseColourPrimary,
  displayColorPickerSecondary,
  handleClickColourSecondary,
  handleChangeColourSecondary,
  handleCloseColourSecondary,
}) => {
  return (
    <>
      <Swatch
        colour={colourPrimary}
        handleClickColour={handleClickColourPrimary}
      />
      <Swatch
        colour={colourSecondary}
        handleClickColour={handleClickColourSecondary}
      />
      {displayColorPickerPrimary && (
        <Box>
          <Button size="small" onClick={handleCloseColourPrimary}>
            X
          </Button>
          <div style={{ width: "20px", height: "auto" }}>
            <TwitterPicker
              triangle={"hide"}
              colors={colourPalettePrimary}
              color={colourPrimary}
              onChangeComplete={handleChangeColourPrimary}
            />
          </div>
        </Box>
      )}
      {displayColorPickerSecondary && (
        <Box>
          <Button size="small" onClick={handleCloseColourSecondary}>
            X
          </Button>
          <div style={{ width: "200px", height: "200px" }}>
            <TwitterPicker
              colors={colourPaletteSecondary}
              triangle={"hide"}
              color={colourSecondary}
              onChangeComplete={handleChangeColourSecondary}
            />
          </div>
        </Box>
      )}
    </>
  );
};

export default ColourPicker;
