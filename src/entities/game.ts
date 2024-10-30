import {Platform} from "./platform";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    slug: string;
    description_raw: string;
    parent_platforms: { platform: Platform }[];
    metaCritic: number;
    rating_top: number;
}