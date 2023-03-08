import React from "react";
import { useFavorites } from "../../hooks/useFavorites";
import ListPokemons from "../ListPokemons";
import NotFound from "../NotFound";

export default function Favorites() {
  const { favorites } = useFavorites();

  const heigthProp = favorites.length < 20 ? "calc(100vh - 13.1rem)" : "100%";

  return (
    <>
      {favorites.length === 0 ? (
        <NotFound text="You have no favorites selected" />
      ) : (
        <div style={{ minHeight: heigthProp }}>
          <ListPokemons pokemons={favorites} totalResults={favorites.length} />
        </div>
      )}
    </>
  );
}
