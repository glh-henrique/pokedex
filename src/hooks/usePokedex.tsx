import { createContext, memo, useContext, useEffect, useState } from "react";
import { fetchPagedPokemons } from "../utils";

import { IPokedexContext, IPokemon } from "../interfaces";

const PokedexContext = createContext<IPokedexContext>({
  pokemons: [],
  totalResults: 0,
  isReady: false,
  loadMore: () => {},
});

export function usePokedex() {
  return useContext(PokedexContext);
}

export function PokedexProvider({ children }: any) {
  const [isReady, setReady] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function initialLoad() {
      try {
        const { count, results } = await fetchPagedPokemons(
          0,
          controller.signal
        );

        setPokemons(results);
        setTotalResults(count);
        setReady(true);
      } catch (error) {
        console.error(error);
      }
    }

    initialLoad();

    return () => {
      controller.abort();
    };
  }, []);

  const loadMore = async (page: number) => {
    setReady(false);
    const controller = new AbortController();

    try {
      const { results } = await fetchPagedPokemons(page, controller.signal);

      setPokemons(results);
      setReady(true);
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
    <PokedexContext.Provider value={{ pokemons, totalResults, isReady, loadMore }}>
      {children}
    </PokedexContext.Provider>
  );
}

export const ProvidePokedex = memo(PokedexProvider);

export default PokedexContext;
