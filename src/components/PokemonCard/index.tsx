import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { AVATAR_PREFIX } from "../../constants";
import { generateHashId } from "../../utils";

export default function PokemonCard({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  return (
    <Card
      sx={{
        minWidth: { xs: "100%", sm: "12.5rem" },
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="favorite">
            <StarOutlineIcon color="info" />
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
