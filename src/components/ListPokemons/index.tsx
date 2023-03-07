import React from "react";
import { Grid } from "@mui/material";
import { usePokedex } from "../../hooks/usePokedex";
import PokemonCard from "../PokemonCard";

export default function ListPokemons() {
  const { pokemons, isLastPage } = usePokedex();

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} {...pokemon} />
            ))}
          </Grid>
        </Grid>
      </Grid>

      {!isLastPage && <div>Loading...</div>}
    </>
  );
}
