import React from "react";
import { usePokedex } from "../../hooks/usePokedex";
import ListPokemons from "../ListPokemons";

export default function Home() {
  // const { pokemons, isLastPage } = usePokedex();

  return (
    <div>
      <ListPokemons  />
    </div>
  );
}
