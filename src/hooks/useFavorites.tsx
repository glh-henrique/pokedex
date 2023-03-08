import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IFavoritesContext, IPokemon } from "../interfaces";
import { LOCAL_STORAGE_KEY } from "./../constants";

const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  isFavorite: () => false,
  toggleFavorite: () => undefined,
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

function FavoritesProvider({ children }: any) {
  const localFavorites = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  const initFavorites = JSON.parse(
    !localFavorites ? "[]" : localFavorites
  );
  const [favorites, setFavorites] = useState<IPokemon[]>(initFavorites);

  const isFavorite = useCallback(
    (id: number) => favorites.findIndex((x) => x.id === id) >= 0,
    [favorites]
  );

  const toggleFavorite = useCallback((pokemon: IPokemon) => {
    setFavorites((starredPokemons) => {
      const index = starredPokemons.findIndex((x) => x.id === pokemon.id);

      if (index >= 0) {
        return starredPokemons.filter((x) => x.id !== pokemon.id);
      }

      const newFavorites = starredPokemons.slice().concat([pokemon]);
      newFavorites.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          sensitivity: "base",
        })
      );

      return newFavorites;
    });
  }, []);

  useEffect(() => {
    const _favorites = JSON.stringify(favorites);

    if (_favorites !== window.localStorage.getItem(LOCAL_STORAGE_KEY)) {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, _favorites);
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const ProvideFavorites = memo(FavoritesProvider);

export default FavoritesContext;
