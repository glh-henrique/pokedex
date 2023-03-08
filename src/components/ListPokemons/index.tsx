import React from "react";
import { Grid, Pagination } from "@mui/material";
import { usePokedex } from "../../hooks/usePokedex";
import PokemonCard from "../PokemonCard";
import { PAGE_SIZE } from "../../constants";

export default function ListPokemons() {
  const { pokemons, totalResults, loadMore } = usePokedex();

  const handlePageChange = async (page: number) => {
    loadMore(page);
  }

  return (
    <>
      <Grid container justifyContent="center" sx={{ marginBottom: "6rem" }}>
        <Grid container justifyContent="center" gap={"1rem"}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </Grid>
        <Pagination
          onChange={(e, page) => handlePageChange(page)}
          count={Math.round(totalResults / PAGE_SIZE)}
          variant="outlined"
          color="primary"
          sx={{ marginTop: "2rem" }}
        />
      </Grid>
    </>
  );
}
