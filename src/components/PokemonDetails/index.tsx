import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { API_PREFIX, AVATAR_PREFIX } from "../../constants";
import Fallback from "../Fallback";
import NotFound from "../NotFound";

interface IPokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

export default function PokemonDetails() {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const [pokemon, setPokemon] = useState<IPokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!pokemonName) return;
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch(`${API_PREFIX}/pokemon/${pokemonName}`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, [pokemonName]);

  if (loading) {
    return <Fallback />;
  }

  if (error || !pokemon) {
    return <NotFound text="Pokemon not found" />;
  }

  return (
    <Grid container justifyContent="center" sx={{ color: "#FFF" }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
          <CardMedia
            sx={{ width: "12rem", height: "12rem", margin: "auto" }}
            component="img"
            image={`${AVATAR_PREFIX}/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ textTransform: "capitalize", marginBottom: "0.5rem" }}
            >
              {pokemon.name}
            </Typography>
            <Typography variant="body2">Height: {pokemon.height}</Typography>
            <Typography variant="body2">Weight: {pokemon.weight}</Typography>
            <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
              Types: {pokemon.types.map((t) => t.type.name).join(", ")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
