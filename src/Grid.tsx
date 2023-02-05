import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface GridLayoutProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickSort: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
  numRectangles: number;
  rectangles: JSX.Element[];
  svgRef: React.RefObject<SVGSVGElement>;
  isDisabled: boolean;
}

const RootStyles = styled(Paper)(({ theme }) => ({
  minHeight: "80vh",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  svg: { width: "100%", height: "80vh" },
}));

const GridLayout: React.FC<GridLayoutProps> = ({
  handleChange,
  handleClickSort,
  handleClickReset,
  numRectangles,
  rectangles,
  svgRef,
  isDisabled,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RootStyles>
            <svg ref={svgRef}>{rectangles}</svg>
          </RootStyles>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="No. rectangles"
            type="number"
            value={numRectangles}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Grid>
        <Grid item xs={3}>
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
        <Grid item xs={3}>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={handleClickReset}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridLayout;
