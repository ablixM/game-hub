import Platform from "./platform";
import Genre from "./genre";
import Publishers from "./Publishers";
import Trailer from "./trailer";

export default interface Game {
    id: number;
    name: string;
    background_image: string;
    slug: string;
    genres: Genre[]
    publishers: Publishers[]
    trailer: Trailer[]
    description_raw: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}