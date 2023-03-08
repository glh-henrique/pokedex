import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { APP_ROUTES } from "../../constants";
import StarIcon from "@mui/icons-material/Star";

import { Avatar } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar src={require('./assets/pokeball.png')} />
        <Typography
          onClick={() => navigate(APP_ROUTES.BASE)}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer", marginLeft: "1rem" }}
        >
          Pokedex
        </Typography>
        <Typography
          onClick={() => navigate(APP_ROUTES.FAVORITES)}
          variant="h6"
          component="div"
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          Favorites
          <StarIcon sx={{ marginLeft: "5px", color: "yellow" }} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
