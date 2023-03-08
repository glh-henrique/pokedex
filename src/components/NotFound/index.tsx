import { Typography } from "@mui/material";
import React, { useMemo } from "react";

export default function NotFound({ text }: { text?: string }) {
  const textNotFound = text || "Not Found";
  
  const randonNumber = useMemo(() => {
    return Math.floor(Math.random() * (2 - 1 + 1) + 1);
  }, []);

  return (
    <div
      style={{
        height: "calc(100vh - 13.1rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <img src={require(`./assets/${randonNumber}.gif`)} alt="not found" />
      </div>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: "1rem", color: "#FFF" }}
      >
        {textNotFound}
      </Typography>
    </div>
  );
}
