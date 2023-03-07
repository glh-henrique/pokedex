export interface IPokemon {
  id: number;
  name: string;
  url: string;
}

export interface IPokedexContext {
  pokemons: IPokemon[];
  isReady: boolean;
  isLastPage: boolean;
  loadMore: () => Promise<void>;
}

export interface IPageState {
  page: number;
  totalRecords: number;
}

export interface IPageAction {
  type: keyof IPageState;
  value: number;
}

export interface IPokemon {
  id: number;
  name: string;
}