import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Rating {
  count: number;
  id: number;
  percent: number;
  title: string;
}
export interface Store {
    name: string;
    domain: string;
    image_background: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  released: string;
  genres: Array<{
    name: string;
  }>;
  ratings: Array<{
    title: string;
    count: number;
    percent: number;
  }>;
  stores: Array<{
    store: {
      name: string;
      domain: string;
    };
  }>;
  tags: Array<{
    name: string;
  }>;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
