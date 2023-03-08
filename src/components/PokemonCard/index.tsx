import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { APP_ROUTES, AVATAR_PREFIX } from "../../constants";
import { generateHashId } from "../../utils";
import { useFavorites } from "../../hooks/useFavorites";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  const target = `${APP_ROUTES.BASE}${name}`;

  return (
    <Card
      sx={{
        minWidth: { xs: "100%", sm: "12.5rem" },
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();

        navigate(target)
      }}
    >
      <CardHeader
        action={
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();

              toggleFavorite({ id, name });
            }}
            aria-label="favorite"
          >
            {isFavorite(id) ? (
              <StarIcon sx={{ color: "yellow" }} />
            ) : (
              <StarOutlineIcon color="info" />
            )}
          </IconButton>
        }
        title={name}
        subheader={`${generateHashId(id)}`}
      />
      <CardMedia
        sx={{ width: "7rem", height: "7rem", margin: "auto" }}
        component="img"
        alt={`image of ${name}`}
        image={`${AVATAR_PREFIX}/${id}.png`}
      />
    </Card>
  );
}
