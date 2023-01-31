import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const RootStyles = styled(Paper)(({ theme }) => ({
  minHeight: "80vh",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  svg: { width: "100%", height: "80vh" },
}));

// const SvgStyles = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#e0e0e0",
// }));

const InputStyles = styled(Paper)(({ theme }) => ({
  width: "38%",
  backgroundColor: "#f0f0f0",
}));

function GridLayout({ numRectangles, handleChange, rectangles, svgRef }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RootStyles>
            <svg ref={svgRef}>{rectangles}</svg>
          </RootStyles>
        </Grid>
        <Grid item xs={12}>
          <InputStyles>
            <TextField
              label="Number of rectangles"
              type="number"
              value={numRectangles}
              onChange={handleChange}
            />
          </InputStyles>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GridLayout;
