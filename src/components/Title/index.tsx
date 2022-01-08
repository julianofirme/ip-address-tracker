import { Typography } from "@mui/material";
import React from "react";

const Title: React.FC = () => {
  return (
    <Typography variant="h4" sx={{ fontWeight: "500", color: "#FFF" }}>
      IP Address Tracker
    </Typography>
  );
};

export default Title;