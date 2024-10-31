import {Platform} from "./platform";
import {Genre} from "./genre";
import {Publishers} from "./Publishers";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    slug: string;
    genres: Genre[]
    publishers: Publishers[]
    description_raw: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}