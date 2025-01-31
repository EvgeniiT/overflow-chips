import { Box, Button, Chip, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const chipsData = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "CSS",
  "HTML",
  "Redux",
  "Material-UI",
  "Next.js",
  "GraphQL",
  "Jest",
  "Webpack",
  "Next.js",
  "GraphQL",
  "Jest",
  "Webpack",
];

const OverflowChips = () => {
  const [expanded, setExpanded] = useState(false);
  const [hiddenCount, setHiddenCount] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log("effect");
    const countHidden = () => {
      console.log("count");
      if (containerRef.current) {
        const container = containerRef.current;
        const chips = container.children;
        let count = 0;

        for (const chip of chips) {
          if (chip.offsetTop > container.offsetTop) {
            count++;
          }
        }
        setHiddenCount(count);
      }
    };
    countHidden();
    window.addEventListener("resize", countHidden);
    return () => window.removeEventListener("resize", countHidden);
  }, []);

  return (
    <Stack direction={"row"}>
      <Box sx={{ maxWidth: "100%", margin: "auto", textAlign: "center" }}>
        {/* Chip Container */}
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            maxHeight: expanded ? "none" : 32,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {chipsData.map((label, index) => (
            <Chip key={index} label={label} />
          ))}
          <Button
            variant="outlined"
            size="small"
            onClick={() => setExpanded(false)}
          >
            Show Less
          </Button>
        </Box>
      </Box>
      {/* Expand Button */}
      {hiddenCount > 0 && !expanded && (
        <Button
          variant="contained"
          size="small"
          onClick={() => setExpanded(true)}
        >
          +{hiddenCount}
        </Button>
      )}
    </Stack>
  );
};

export default OverflowChips;
