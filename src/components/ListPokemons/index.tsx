import React from "react";
import { Grid, Pagination } from "@mui/material";
import PokemonCard from "../PokemonCard";
import { PAGE_SIZE } from "../../constants";
import { IPokemon } from "../../interfaces";

export default function ListPokemons({
  pokemons,
  totalResults,
  handlePageChange,
}: {
  pokemons: IPokemon[];
  totalResults: number;
  handlePageChange?: (page: number) => void;
}) {
  
  return (
    <>
      <Grid container justifyContent="center" sx={{ marginBottom: "6rem" }}>
        <Grid container justifyContent="center" gap={"1rem"}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </Grid>
        {totalResults > PAGE_SIZE && (
          <Pagination
            onChange={(e, page) => handlePageChange &&  handlePageChange(page)}
            count={Math.round(totalResults / PAGE_SIZE)}
            variant="outlined"
            color="primary"
            sx={{ marginTop: "2rem" }}
          />
        )}
      </Grid>
    </>
  );
}
