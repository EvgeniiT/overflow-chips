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
    const element = containerRef.current;
    if (!element) return;
    const observer = new ResizeObserver((elements) => {
      const container = elements[0];
      const children = container.target.children;
      let hiddenCount = 0;
      Array.from(children).forEach((child) => {
        //@ts-expect-error child has offsetTop
        if (child.offsetTop > 0) {
          hiddenCount++;
        }
      });
      setHiddenCount(hiddenCount);
    });
    observer.observe(element);
    return () => observer.disconnect();
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
          {expanded && (
            <Button
              variant="outlined"
              size="small"
              onClick={() => setExpanded(false)}
            >
              Show Less
            </Button>
          )}
        </Box>
      </Box>
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
