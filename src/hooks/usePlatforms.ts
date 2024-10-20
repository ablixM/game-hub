import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query"; 
import {  APIClient} from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms')

export const usePlatforms = () => {
  return useQuery({
      queryKey: ["platforms"],
      queryFn: apiClient.getAll,
      staleTime: 10 * 60 * 60 * 1000,
      initialData: platforms
  })
}

export default usePlatforms;
