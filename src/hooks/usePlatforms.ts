import {useQuery} from "@tanstack/react-query";
import {APIClient} from "../services/api-client";
import ms from "ms"
import Platform from "../entities/platform";

const apiClient = new APIClient<Platform>('/platforms')

export const usePlatforms = () => {
  return useQuery({
      queryKey: ["platforms"],
      queryFn: apiClient.getAll,
      staleTime: ms("24h"),
      //initialData: platforms
  })
}

export default usePlatforms;
