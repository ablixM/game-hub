import {APIClient} from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import {Trailer} from "../entities/trailer";



const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<Trailer>(`games/${gameId}/movies`)
    return useQuery(
        {
            queryKey: ['Trailers', gameId],
            queryFn: apiClient.getAll,
        }
    )
}

export default useTrailers