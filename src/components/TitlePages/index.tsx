import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { APP_ROUTES } from "../../constants";

export default function TitlePages() {
  const navigate = useNavigate();
  const location = useLocation();

  const titlePage = location.pathname.split("/")[1];

  return (
    <div>
      {titlePage && (
        <Button
          onClick={() => navigate(APP_ROUTES.BASE)}
          sx={{ position: "absolute" }}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      )}

      <Typography
        component="h1"
        align="center"
        sx={{
          color: "white",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          textTransform: "capitalize",
        }}
      >
        {titlePage ? titlePage : "Pokemon List"}
      </Typography>
    </div>
  );
}
