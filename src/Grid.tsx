import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SVG from "./SVG";
import ColourPicker from "./ColourPicker";

interface GridLayoutProps {
  handleChangeNumRect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickSort: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickColourPrimary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleCloseColourPrimary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleChangeColourPrimary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleClickColourSecondary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleCloseColourSecondary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleChangeColourSecondary: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  colourSecondary: string;
  colourPrimary: string;
  displayColorPickerPrimary: boolean;
  displayColorPickerSecondary: boolean;
  numRectangles: number;
  rectangles: JSX.Element[];
  svgRef: React.RefObject<SVGSVGElement>;
  isDisabled: boolean;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  handleChangeNumRect,
  handleClickSort,
  handleClickReset,
  handleClickColourPrimary,
  handleCloseColourPrimary,
  handleChangeColourPrimary,
  handleClickColourSecondary,
  handleCloseColourSecondary,
  handleChangeColourSecondary,
  colourSecondary,
  colourPrimary,
  displayColorPickerPrimary,
  displayColorPickerSecondary,
  numRectangles,
  rectangles,
  svgRef,
  isDisabled,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SVG svgRef={svgRef} rectangles={rectangles} />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="No. rectangles"
            type="number"
            value={numRectangles}
            onChange={handleChangeNumRect}
            disabled={isDisabled}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            size="large"
            color="primary"
            variant="outlined"
            onClick={handleClickSort}
            disabled={isDisabled}
          >
            Sort
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={handleClickReset}
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs={3}>
          <ColourPicker
            colourPrimary={colourPrimary}
            colourSecondary={colourSecondary}
            displayColorPickerPrimary={displayColorPickerPrimary}
            handleCloseColourPrimary={handleCloseColourPrimary}
            handleClickColourPrimary={handleClickColourPrimary}
            handleChangeColourPrimary={handleChangeColourPrimary}
            displayColorPickerSecondary={displayColorPickerSecondary}
            handleCloseColourSecondary={handleCloseColourSecondary}
            handleClickColourSecondary={handleClickColourSecondary}
            handleChangeColourSecondary={handleChangeColourSecondary}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridLayout;
