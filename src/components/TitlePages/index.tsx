import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { APP_ROUTES } from "../../constants";

export default function TitlePages() {
  const navigate = useNavigate();
  const location = useLocation();

  const titlePage = location.pathname.split("/");


  const showTitle = () => {
    if (titlePage[2] !== "" && titlePage[2] !== undefined) {
      return titlePage[2];
    } else if ( titlePage[1] === "pokedex"){
      return "Pokemon List";
    } else {
      return titlePage[1];
    }
  };

  return (
    <div>
      {titlePage[2] !== "" && (
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
        {showTitle()}
      </Typography>
    </div>
  );
}
