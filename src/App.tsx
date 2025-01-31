import { Box, Typography } from "@mui/material";
import OverflowingChipContainer from "./OverflowingChipContainer";

function App() {
  const chips = [
    "Chip 1",
    "Chip 2",
    "Chip 3",
    "Chip 4",
    "Chip 5",
    "Chip 6",
    "Chip 7",
    "Chip 8",
    "Chip 9",
    "Chip 10",
  ];

  return (
    <Box>
      <Typography>Full-Width Overflowing Chip Container</Typography>
      <OverflowingChipContainer />
    </Box>
  );
}

export default App;
