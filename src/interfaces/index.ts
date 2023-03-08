export interface IPokemon {
  id: number;
  name: string;
  url?: string;
}

export interface IPokedexContext {
  pokemons: IPokemon[];
  isReady: boolean;
  totalResults: number;
  loadMore: (page: number) => void;
}

export interface IPageState {
  page: number;
  totalRecords: number;
}

export interface IPageAction {
  type: keyof IPageState;
  value: number;
}

export interface IFavoritesContext {
  favorites: IPokemon[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (pokemon: IPokemon) => void;
}