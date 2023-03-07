import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { getPage, pageReducer } from "../utils";

import { IPokedexContext } from "../interfaces";
import { PAGE_SIZE } from "./../constants";

const initialPageState = {
  page: 0,
  totalRecords: 0,
};

const PokedexContext = createContext<IPokedexContext>({
  pokemons: [],
  isReady: false,
  isLastPage: false,
  loadMore: async () => undefined,
});

export function usePokedex() {
  return useContext(PokedexContext);
}

export function PokedexProvider({ children }: any) {
  const fetching = useRef(false);
  const [isReady, setReady] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [{ page, totalRecords }, pageDispatcher] = useReducer(
    pageReducer,
    initialPageState
  );

  const isLastPage = useMemo(
    () => page === Math.ceil(totalRecords / PAGE_SIZE),
    [page, totalRecords]
  );

  const loadMore = useCallback(async () => {
    if (!!fetching.current) {
      return;
    }

    try {
      const next = page + 1;
      fetching.current = true;

      const { results } = await getPage(next);

      pageDispatcher({ type: "page", value: next });
      setPokemons((records) => records.concat(results));
    } finally {
      fetching.current = false;
    }
  }, [page]);

  useEffect(() => {
    const controller = new AbortController();

    async function initialLoad() {
      try {
        if (!!fetching.current) {
          return;
        }

        fetching.current = true;

        const { count, results } = await getPage(0, controller.signal);

        fetching.current = false;

        pageDispatcher({ type: "totalRecords", value: count });
        setPokemons(results);
        setReady(true);
      } catch (error) {
        console.error(error);
      }
    }

    initialLoad();

    return () => {
      if (!!fetching.current) {
        controller.abort();
      }
    };
  }, []);

  return (
    <PokedexContext.Provider
      value={{ pokemons, isReady, isLastPage, loadMore }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export const ProvidePokedex = memo(PokedexProvider);

export default PokedexContext;
