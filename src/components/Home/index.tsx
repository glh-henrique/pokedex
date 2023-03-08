import React from "react";
import { usePokedex } from "../../hooks/usePokedex";
import ListPokemons from "../ListPokemons";

export default function Home() {
  const { pokemons, totalResults, loadMore } = usePokedex();

  const handlePageChange = async (page: number) => {
    loadMore(page);
  };

  return (
      <ListPokemons
        pokemons={pokemons}
        totalResults={totalResults}
        handlePageChange={handlePageChange}
      />
  );
}
